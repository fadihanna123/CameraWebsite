import { useNavigate } from "react-router-dom";

export const RedirectToRoute = (route: string) => {
    const navigate = useNavigate();
    navigate(route);
};
