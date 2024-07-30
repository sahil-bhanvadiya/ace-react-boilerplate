import { createRoute } from '@tanstack/react-router';
import { rootRoute } from '@/src/RootRouter';
import Analytics from '../Analytics';

export const analyticRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/analytics',
  component: Analytics,
});
