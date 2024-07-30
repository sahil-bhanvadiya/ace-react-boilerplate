import { createRoute } from '@tanstack/react-router';
import { rootRoute } from '@/src/RootRouter';
import Orders from '../Orders';

export const orderRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/orders',
  component: Orders,
});
