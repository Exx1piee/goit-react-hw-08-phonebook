import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";
import { SharedLayout } from "./SharedL/sharedl";
import { useDispatch, useSelector } from "react-redux";
const MainPage = lazy(() => import('./MainPage/mainpage.jsx'))
const RegisterForm = lazy(() => import("./Reg/reg"));
const PageUsers = lazy(() => import('./UsrPage/usrpage'));
const LogOrNo = lazy(() => import('./LogOrNo/logorno'));
const NotLogOrYes = lazy(() => import('./NotLogOrYes/notlogoryes'));
const LogInForm = lazy(() => import('./Log/log'));
export const App = () => {

  return (
    <div
      style={{
        background: 'white',
        height: '100%',
        display: 'flex',
        fontSize: 20,
        color: '#fff',
        margin: 0,
        padding: 0
      }}
    >
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: "column"
      }}>
  <Routes>
    <Route path="/" element={<SharedLayout/>}>
    <Route index element={<MainPage/>}/>
    <Route path="/register" element={
      <LogOrNo redirectTo='/contacts' component={<RegisterForm/>}/>
    }/>
    <Route path="/login" element={
      <LogOrNo redirectTo='/contacts' component={<LogInForm/>}/>
    }/>
    <Route path="/contacts" element={
      <NotLogOrYes component={<PageUsers/>}/>
    }/>
  </Route>
  <Route path="*" element={<Navigate to="/" />} /> 
  </Routes>
</div>
    </div>
  )
};