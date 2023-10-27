import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: 4px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.ml};
  color: ${p => p.theme.colors.lime};
  background-color: ${p => p.theme.colors.primary};
  &.active {
    background-color: ${p => p.theme.colors.tomato};
    color: ${p => p.theme.colors.white};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`;
export const Wrapper = styled.header`
margin: ${p => p.theme.space[3]}px;
height:100%;
border-bottom:2px solid #afbdcb;
display :flex;
align-items:center;
justify-content:center;
`;

export const Nav = styled.nav`
width: 60vw;
display: flex;
justify-content: space-evenly;
`;