import React from 'react'
import { Container, Header, StyledLink, StyledNav } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </StyledNav>
          </Header>
          <Outlet/>
    </Container>
  );
}

export default SharedLayout
