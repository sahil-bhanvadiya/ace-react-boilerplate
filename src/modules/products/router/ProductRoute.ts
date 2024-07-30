import { createRoute } from '@tanstack/react-router';
import { rootRoute } from '@/src/RootRouter';
import Products from '../Products';

export const productRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products',
  component: Products,
});
