import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import NavbarWrapper from './shared/Navbar/NavbarWrapper';
import { loginRoute } from './modules/login/router/LoginRoutes';
import { homeRoute } from './modules/home/router/HomeRoutes';
import { analyticRoute } from './modules/analytics/router/AnalyticsRoutes';
import { orderRoute } from './modules/orders/router/OrderRoute';
import { productRoute } from './modules/products/router/ProductRoute';

export const rootRoute = createRootRoute({
  component: () => (
    <div className="flex min-h-screen w-full flex-col">
      <NavbarWrapper />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});

export const routeTree = rootRoute.addChildren([
  homeRoute,
  loginRoute,
  analyticRoute,
  orderRoute,
  productRoute,
]);
