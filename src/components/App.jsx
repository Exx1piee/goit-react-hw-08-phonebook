import React, { lazy }  from "react";
import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { SharedLayout } from "./SharedL/sharedl";
import { useDispatch, useSelector } from "react-redux";
import { searchForBackground } from "../redux/searchForStyles.jsx";
import { selectBgGeneral } from "../redux/selectors";
const MainPage = lazy(() => import('./MainPage/mainpage.jsx'));
const RegisterForm = lazy(() => import("./Reg/reg"));
const PageUsers = lazy(() => import('./UsrPage/usrpage'));
const LogOrNo = lazy(() => import('./LogOrNo/logorno'));
const NotLogOrYes = lazy(() => import('./NotLogOrYes/notlogoryes'));
const LogInForm = lazy(() => import('./Log/log'));


export const App = () => {
  const dispatch = useDispatch();

  const bgGeneral = useSelector(selectBgGeneral)
  const imgForBackground = bgGeneral ? bgGeneral.img : 'https://lh3.googleusercontent.com/pw/ABLVV84w_pNrNk2EMyul9WEZQIGgWoLvREgHEC97b4Mf15Ks5Hoqt7v7nc07QVJrbIMlK2LWegS0dAQKL6yuKPxHGHqTDwlQOCxOMGTWtrhzl73nYIFv9CWK4h9QUB2dvOTMfXj-twNVuqOHLhczMnZRTAvECg=w1920-h1080-s-no-gm?authuser=0';

  useEffect(() => {
    dispatch(searchForBackground());
  }, [dispatch]);
  return (
    <Routes>
      <div
  style={{
    background: '#202020',
    backgroundImage: `url(${imgForBackground})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
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
                <LogOrNo redirectTo='/contacts' component={RegisterForm}/>
              }/>
              <Route path="/login" element={
                <LogOrNo redirectTo='/contacts' component={LogInForm}/>
              }/>
              <Route path="/contacts" element={
                <NotLogOrYes component={PageUsers}/>
              }/>
            </Route>
            <Route path="*" element={<Navigate to="/" />} /> 
          </Routes>
        </div>
      </div>
    </Routes>
  )
};
