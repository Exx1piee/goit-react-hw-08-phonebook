import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/workWithBackend/selectors";

const NotLogOrYes = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return !isLoggedIn ? <Navigate to={redirectTo}/> : Component;
};

export default NotLogOrYes;