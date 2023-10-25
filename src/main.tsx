
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom';

import App from './App';
import { store } from './redux';

import '@/styles/scss/index.scss';
import { MainDashboard } from './pages';


/** 
 * Using HashRouter instead of BrowserRouter 
 * because GitHub Pages does not natively support single-page applications
 */
const router = createHashRouter(
  [{
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainDashboard />
      },
      {
        path: '/temp',
        element: <div>Coming Soon ^_^</div>
      },
      {
        path: "*",
        element: <Navigate to='/' replace />
      }
    ]
  }],
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
