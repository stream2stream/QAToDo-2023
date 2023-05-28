import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// Ignore this, it's new to version 6.4 but renders as MPA
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import NotFound from './components/NotFound';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     errorElement: <NotFound/>
//   },
// ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
