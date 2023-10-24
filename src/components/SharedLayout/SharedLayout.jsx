import React from 'react'
import { Container, StyledLink, StyledNav } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <Container>
      <header>
        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </StyledNav>
          </header>
          <Outlet/>
    </Container>
  );
}

export default SharedLayout
