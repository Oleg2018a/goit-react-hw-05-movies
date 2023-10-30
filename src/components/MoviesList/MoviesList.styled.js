import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const PageTitle = styled.h1`
  display: block;
  text-align: center;
  color: #fff;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  max-width: calc(100% - 36px);
`;
export const StyleLink = styled(NavLink)`
text-decoration: none;
`