// import { BrowserRouter, Routes, Route} from  "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import Dashboard from "../dashboard/Dashboard";
import App from "../App";
import Dashboardlayout from "../dashboard/Dashboardlayout";
import UploadBooks from "../dashboard/UploadBooks";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../components/Signup";


const CustomRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "book/:id",
        element: <SingleBook />,
        loader: async (params) => {
          try {
            const response = await fetch(`http://localhost:5000/all-books`);
            if (!response.ok) {
              throw new Error('Failed to fetch book data');
            }
            const data = await response.json();
            return data;
          } catch (error) {
            console.error('Error fetching book data:', error);
            throw error;
          }
        }
        
      },
    ],
  },
  {
    path:"/admin/dashboard",
    element: <Dashboardlayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/dashboard/upload",
        element: < UploadBooks/>,
      },
      {
        path: "/admin/dashboard/manage",
        element: < ManageBooks/>,
      },
      {
        path: "/admin/dashboard/edit-books/:id",
        element: <EditBooks />,
        loader: (params) => fetch(`http://localhost:5000/book`),
      }
    ],
  },
  {
    path: "/sign-up",
    element: <Signup />,
  }
]);


export default CustomRouter;
