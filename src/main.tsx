import App from './App';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom';
import { store } from './redux';

import '@/styles/scss/index.scss';


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
        element: <div>Home</div>
      },
      {
        path: "/team",
        element: <div></div>
      },
      {
        path: "/sign-in",
        element: <div></div>
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
