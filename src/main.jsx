import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'resume',
        element: <ResumePage />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

