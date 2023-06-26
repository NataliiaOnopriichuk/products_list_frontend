import { HomePage } from 'pages/HomePage';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';


export const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
