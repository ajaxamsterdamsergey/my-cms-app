import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { Loader } from '../Loader/Loader';
import { Wrapper } from './Layout.styled';

export const Layout = ({ tabs }) => {
  return (
    <Wrapper>
      <Navigation tabs={tabs} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};