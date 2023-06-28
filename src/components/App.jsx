import { HomePage } from 'pages/HomePage';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { RegistrationPage } from 'pages/RegistrationPage';
import { LoginPage } from 'pages/LoginPage';


export const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
