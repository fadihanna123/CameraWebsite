import LogoImg from "assets/logo.webp";
import Login from "containers/auth/Login";
import { langSwitcher } from "functions";
import { LoginReducerTypes } from "models";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Img from "ui/Img";
import MainHeader from "ui/MainHeader";
import Menu from "ui/Menu";

const Header: React.FC = () => {
    const login = useSelector((state: LoginReducerTypes) => state.loginReducer);

    const dispatch = useDispatch();

    return (
        <MainHeader>
            <nav className="topbar">
                <section className="logobox">
                    <Link to="/">
                        <Img
                            source={LogoImg}
                            className={["logoimg"]}
                            alt="Logobild"
                            ariaLabel="Logobild"
                            loading="lazy"
                            dimensions={[460, 200]}
                        />
                    </Link>
                </section>
                <section className="loginbox">
                    <Login />
                </section>
            </nav>
            <Menu classNames={["navbar"]}>
                <Link to="/" className="link">
                    Start
                </Link>
                {!login && (
                    <Link to="/Register" className="link">
                        Registrera dig
                    </Link>
                )}
                {login && (
                    <Link to="/Dashobard" className="link">
                        Profil
                    </Link>
                )}
                <Link to="/Contact" className="link">
                    Kontakta oss
                </Link>
                <Link to="/About" className="link">
                    Om oss
                </Link>
                <a
                    onClick={() => langSwitcher("en", dispatch)}
                    className="link"
                >
                    EN
                </a>
                <a
                    onClick={() => langSwitcher("sw", dispatch)}
                    className="link"
                >
                    SV
                </a>
            </Menu>
        </MainHeader>
    );
};
export default Header;
