import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FormPage from './pages/FormPage';
import ImprintPage from './pages/ImprintPage';
import DataPDPage from './pages/DataPDPage';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <FormPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/imprint',
    element: <ImprintPage />,
  },
  {
    path: '/dpd',
    element: <DataPDPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
