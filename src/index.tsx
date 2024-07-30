import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from '@/components/theme-provider';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './RootRouter';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="sf-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>,
  );
}
