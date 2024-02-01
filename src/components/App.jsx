
import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";
import { SharedLayout } from "./SharedLayout/SharedLayout";
const MainPage = lazy(() => import('./MainPage/mainpage.jsx'))
const RegisterForm = lazy(() => import("./Reg/reg"));
const PageUsers = lazy(() => import('./UsrPage/userpage'));
const LoggedInOrNot = lazy(() => import('./LogOrNo/logorno'));
const NotLoggedOrY = lazy(() => import('./NotLogOrYes/notlogoryes'));
const LogInForm = lazy(() => import('./Log/log'));
export const App = () => {
  
  return (
    <div
    >
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: "column"
      }}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/register" element={
              <LoggedInOrNot redirectTo='/contacts' component={<RegisterForm />} />
            } />
            <Route path="/login" element={
              <LoggedInOrNot redirectTo='/contacts' component={<LogInForm />} />
            } />
            <Route path="/contacts" element={
              <NotLoggedOrY component={<PageUsers />} />
            } />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  )
};