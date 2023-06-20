import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import ErrorPage from './pages/ErrorPage';
import HeroDetails from './pages/HeroDetails';
import Home from './pages/Home';

const App: React.FC = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/details",
      element: <HeroDetails />,
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;