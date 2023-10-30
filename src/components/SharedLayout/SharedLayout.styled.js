import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 14px;
  background-color: #131415;
`;
export const Header = styled.header`
  padding: 14px;
  background-color: #d4cfcf36;
`;
export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 24px;
  &.active {
    color: #ff6100;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 16px;
`;
