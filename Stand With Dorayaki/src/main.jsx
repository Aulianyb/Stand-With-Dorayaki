import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'

import {
  createBrowserRouter, 
  RouterProvider,
} from "react-router-dom"; 
import Stores from './pages/stores.jsx';
import ErrorPage from './error-page.jsx';
import Menu from './pages/menu.jsx';
import AddStore from './pages/addStore.jsx';
import AddRasa from './pages/addRasa'; 

const router = createBrowserRouter([
  {
  path : "/",
    element :  <Stores />,
    errorElement: <ErrorPage />,
  },
  {
    path: "store/:storeID",
    element: <Menu />
  },
  {
    path: "AddStore",
    element: <AddStore />
  },
  {
    path: "AddRasa",
    element: <AddRasa />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
