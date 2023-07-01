// import { Loader } from 'components/Loader/Loader';
// import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';


export const Layout = () => {
  return (
    <>
      <Header />
      <main style={{marginTop: "100px"}}>
        {/* <Suspense fallback={<Loader />}> */}
          <Outlet />
        {/* </Suspense> */}
      </main>
    </>
  );
};