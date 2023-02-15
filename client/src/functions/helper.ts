import { useNavigate } from 'react-router-dom';

/**
 * Redirect to a route.
 *
 * @function RedirectToRoute
 * @param { string } route
 * @returns { void }
 * @example RedirectToRoute("/profile");
 */
export const RedirectToRoute = (route: string): void => {
  const navigate = useNavigate();
  navigate(route);
};
