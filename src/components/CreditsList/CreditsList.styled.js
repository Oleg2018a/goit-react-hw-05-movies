import styled from "styled-components";
export const Container = styled.div`
display: block;
  max-width: 1440px;
  margin: 0px auto;
  padding: 20px;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  width: calc((100% - 50px) / 2);
  padding: 10px;
  box-shadow: rgb(0, 0, 0) 2px 2px 4px 0px, rgb(153, 153, 153) -2px -2px 4px 0px;
  color: rgb(174, 174, 174);
  border-radius: 8px;
`; 