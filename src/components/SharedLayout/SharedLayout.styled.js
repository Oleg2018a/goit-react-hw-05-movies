import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 14px;
`;

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: red;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 16px;
`;
