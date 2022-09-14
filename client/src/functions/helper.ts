import { useNavigate } from 'react-router-dom';

/**
 * Redirect to a route.
 *
 * @param route
 */

export const RedirectToRoute = (route: string) => {
  const navigate = useNavigate();
  navigate(route);
};
