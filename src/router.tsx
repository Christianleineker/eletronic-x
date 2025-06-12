import { createBrowserRouter } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { Notfound } from './pages/NotFound/NotFound';
import { Cart } from './pages/Cart/index';
import { Register } from './pages/Register/register';
import { Login } from './pages/Login/login';

import { Layout } from './components/layout/index';
import { NoHeaderFooterLayout } from './components/NoHeaderFooterLayout/index';
import { NoHeader } from './components/NoHeader/index';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/meu-carrinho',
        element: <Cart />,
      },
    ],
  },
  {
    element: <NoHeader />,
    children: [
      {
        path: '/cadastro',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login/>
      },
    ],
  },
  {
    element: <NoHeaderFooterLayout />,
    children: [
      {
        path: '*',
        element: <Notfound />,
      },
    ],
  },
]);

export { router }