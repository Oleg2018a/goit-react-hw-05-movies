import styled from "styled-components";
export const Container = styled.div`
display: block;
max-width: 1280px;
margin: 0 auto;
padding: 20px;
`

export const List = styled.ul`
  padding-top: 30px;
`;
export const Item = styled.li`
  margin-bottom: 48px;
  box-shadow: rgb(0, 0, 0) 2px 2px 4px 0px, rgb(153, 153, 153) -2px -2px 4px 0px;
  color: rgb(174, 174, 174);
  padding: 8px;
  &:last-child {
    margin-bottom: 0;
  }
`;