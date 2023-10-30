import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Paragraf = styled.span`
margin-right: 16px;

&:last-child{
    margin-right: 0;
}
`
export const Link = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  &.active {
    color: blue;
  }
`;