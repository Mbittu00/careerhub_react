import React from 'react'
import {
    createBrowserRouter,
    RouterProvider
  } from "react-router-dom";
import { Find } from './pages/find/Find';
import { Oppo } from './pages/opportunity/Oppo';
import { Login } from './pages/login/Login';

  const router = createBrowserRouter([
    {
        path:"/",
        element:<Find/>
    },{
      path:"/oppo/:id",
      element:<Oppo/>
    },{
      path:"/login",
      element:<Login/>
    }
  ])
export const Router = () => {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}
