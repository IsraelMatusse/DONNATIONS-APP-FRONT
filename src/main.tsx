import './index.css';
import ReactDOM from 'react-dom/client';
import Home from './pages/Page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import { Cmapaigns } from './pages/Campaign';
import { CampaignDetails } from './pages/CampaignDetails';
import { CreateInstitution } from './pages/CreateInstitution';
import { InstitutionsList } from './pages/Institutions';
import { CreateCampaign } from './pages/CreateCampaign';
import { Login } from './pages/Login';

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
  {
    path: '/criar-campanha',
    element: <CreateCampaign />,
  },
  {
    path: '/instituicoes',
    element: <InstitutionsList />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/criar-instituicoes',
    element: <CreateInstitution />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
