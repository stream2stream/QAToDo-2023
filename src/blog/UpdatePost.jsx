import React, { useState, useEffect } from 'react';
import PostView from './PostView';
import SuccessMessage from './SuccessMessage';
import BlogDataService from '../services/blog_service';
import { useParams } from "react-router-dom";

export default function UpdatePost() {
    // this component manages all the state but uses another component
    // PostView to render the form UI
    // This is the Container and Presentational Pattern

    const [postID, setPostID] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [updated_success, setUpdatedSuccess] = useState(false);

    let { post_id } = useParams();

    // ensure the post to be updated is loaded
    useEffect(() => {
        if (title === '') {
            getPostByID(post_id);
        }
    },
        [post_id, title]
    );

    function handleSubmit(e) {
        e.preventDefault();
        update_post();
    }

    function handleChangeTitle(e) {
        setTitle(e.target.value);
    }

    function handleChangeContent(e) {
        setContent(e.target.value);
    }
    function getPostByID(postID) {
        BlogDataService.get(postID)
            .then(res => {
                setPostID(postID);
                setTitle(res.data.post[3]);
                setContent(res.data.post[4]);
                setUpdatedSuccess(false);
            })
            .catch(err => {
                setPostID('');
                setTitle('');
                setContent('');
                setUpdatedSuccess(false);
                // console.log(err);
            })
            ;
    }
    function update_post() {
        BlogDataService.update(postID, { 'title': title, 'content': content })
            .then(res => {
                setPostID(res.data.post[0]);
                setTitle(res.data.post[3]);
                setContent(res.data.post[4]);
                setUpdatedSuccess(true);

            })
            .catch(err => {
                setPostID('');
                setTitle('');
                setContent('');
                setUpdatedSuccess(false);
                //console.log(err);
            })
            ;
    }
    return (
        <div>
            {!updated_success &&
                <PostView btnText={`Update Post`} content={content} title={title} postID={postID} hide={false} handleSubmit={handleSubmit} handleChangeTitle={handleChangeTitle} handleChangeContent={handleChangeContent} />
            }
            {updated_success &&
                <SuccessMessage postID={postID} action={`updated`} link={`/${postID}`} link_text={`Show Post`} />
            }
        </div>
    );
}

