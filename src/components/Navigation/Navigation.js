import React from 'react';
import { NavItem, Wrapper, Nav } from './Navigation.styled';

export const Navigation = ({ tabs }) => {
  return (
    <Wrapper>
      <Nav>
        {tabs.map(tab => (
          <NavItem key={tab.id} to={`/${tab.id}`}>{tab.title}</NavItem >
        ))}
      </Nav>
    </Wrapper>
  );
}