import { doLogOut } from "functions";
import useTranslation from "hooks/useTranslation";
import localforage from "localforage";
import { AuthorReducerTypes, LangReducerTypes } from "models";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthor } from "redux/actions";
import Btn from "ui/Btn";
import Heading from "ui/Heading";
import { localForageKeys } from "utils/constants";

const LogOutBox: React.FC = () => {
    const author = useSelector(
        (state: AuthorReducerTypes) => state.authorReducer
    );

    const lang = useSelector((state: LangReducerTypes) => state.langReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        localforage
            .getItem(localForageKeys.Author)
            .then((data) => setAuthor(data));
    }, []);

    return (
        <section className="logoutbox">
            <Heading headingLevel={4}>
                <b>
                    {useTranslation("Hi", lang)}
                    {author}
                </b>
            </Heading>
            <Btn clickFunc={() => doLogOut(dispatch)}>
                {useTranslation("Logout", lang)}
            </Btn>
        </section>
    );
};

export default LogOutBox;
