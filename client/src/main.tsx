import '@/styles/scss/index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom';

import App from './App';
import { AppRoutes, GuestRoutes } from './AppRoutes';
import { store } from './redux';

/**
 * Using HashRouter instead of BrowserRouter
 * because GitHub Pages does not natively support single-page applications
 */
const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [...AppRoutes, ...GuestRoutes]
  },
  // Handle invalid routes
  {
    path: '*',
    element: <Navigate to='/dashboard' replace />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
