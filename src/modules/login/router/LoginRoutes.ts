import { createRoute } from '@tanstack/react-router';
import { Login } from '../Login';
import { rootRoute } from '@/src/RootRouter';

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
});
