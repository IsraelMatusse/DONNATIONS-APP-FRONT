import './index.css';
import ReactDOM from 'react-dom/client';
import Home from './pages/Page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import { Cmapaigns } from './pages/Campaign';
import { CampaignDetails } from './pages/CampaignDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/campanhas',
    element: <Cmapaigns />,
  },
  {
    path: '/campanha/:id',
    element: <CampaignDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
