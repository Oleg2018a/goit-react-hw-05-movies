

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  max-width: calc(100% - 24px);
`;
export const StyleLink = styled(NavLink)`
  text-decoration: none;
`;
export const Item = styled.li`
  &:hover {
    scale: 1.1;
  }
`;