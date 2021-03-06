import React from "react";
import { RouteObject } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import UserPage from "../views/User";
import LoginPage from "../views/Login";
import HomePage from "../views/Home";
import SettingPage from "../views/Setting";


const routes: Array<RouteObject> = [
  {
    path: '/',
    element: <AppLayout/>,
    children: [
      {
        path: '',
        element: <UserPage/>
      },
      {
        path: 'setting',
        element: <SettingPage/>
      }
    ]
  },
  {
    path: '/Login',
    element: <LoginPage/>,
  }
]

export default routes
