import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter, 
  RouterProvider,
} from "react-router-dom"; 
import Stores from './pages/stores.jsx';
import ErrorPage from './error-page.jsx';
import Menu from './pages/menu.jsx';

const router = createBrowserRouter([
  {
   path : "/",
   element :  <Stores />,
    errorElement: <ErrorPage />,
  },
  {
    path: "menu/:contactId",
    element: <Menu />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
