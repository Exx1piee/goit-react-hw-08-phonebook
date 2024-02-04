import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Navigation } from "../Nav/nav";
import css from './sharedl.module.css';
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/BackEndProps/selectors";
import UserMenu from "../UsrMenu/usrmenu";

export const SharedLayout = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return(
        <>
            <header className={css.headerSharedLayout}>
                <Navigation/>
                {isLoggedIn && <UserMenu/>}
            </header>
            <main>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
}