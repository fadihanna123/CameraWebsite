import { NavigateFunction } from "react-router";

export const doLogOut = (navigate: NavigateFunction) => {
  sessionStorage.removeItem("Token");
  sessionStorage.removeItem("Author");
  navigate("/Start");
};
