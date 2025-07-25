import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const HomeLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className='max-w-7xl mx-auto my-10'>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default HomeLayout;
