import { doLogOut } from 'functions';
import { LoginReducerTypes } from 'models';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Logout: React.FC = () => {
    const login = useSelector((state: LoginReducerTypes) => state.loginReducer);

    const dispatch = useDispatch();

    return <>{login ? doLogOut(dispatch) : <Navigate to="/" />}</>;
};

export default Logout;
