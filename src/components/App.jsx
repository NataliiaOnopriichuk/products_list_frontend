import { HomePage } from 'pages/HomePage';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { RegistrationPage } from 'pages/RegistrationPage';
import { LoginPage } from 'pages/LoginPage';
import { ProductsPage } from 'pages/ProductsPage';
import { routes } from 'utils/routes';


export const App = () => {
  const isAuth = false
  return (
    <div>
      <Routes>
      <Route path={routes.HOME} element={<Layout />}>
          {!isAuth && <Route index element={<HomePage />} />}
          {isAuth &&<Route index element={<ProductsPage />} />}
        </Route>
        {!isAuth && <Route path={routes.REGISTER} element={<RegistrationPage />} />}
        {!isAuth && <Route path={routes.LOGIN} element={<LoginPage />} />}
        <Route path="*" element={<Navigate to={routes.HOME} />} />
      </Routes>
    </div>
  );
};
