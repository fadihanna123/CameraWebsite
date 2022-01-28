import { NavigateFunction, useNavigate } from 'react-router-dom';

export const redirectToRoute = (route: string) => {
  const navigate: NavigateFunction = useNavigate();
  navigate(route);
};
