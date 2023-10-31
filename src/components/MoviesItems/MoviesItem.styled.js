import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Item = styled.li`

&:hover{
scale: 1.1
}
`
export const Title = styled.h3`
  max-width: 200px;
  color: #9f9f9f;
  font-size: 15px;
  font-weight: 16px;
`;
export const StyleLink = styled(NavLink)`
  text-decoration: none;
`;