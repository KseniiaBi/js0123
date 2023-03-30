import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './Home';
import Contact from './Contact';
import ErrorPage from './ErrorPage';
import About from './About';

const root = ReactDOM.createRoot(document.getElementById('root'));

const myrouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/about',
    element: <About />
  }
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={myrouter} />
  </React.StrictMode>
);

