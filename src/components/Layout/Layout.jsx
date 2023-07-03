// import { Loader } from 'components/Loader/Loader';
// import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Main } from './style';


export const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        {/* <Suspense fallback={<Loader />}> */}
          <Outlet />
        {/* </Suspense> */}
      </Main>
    </>
  );
};