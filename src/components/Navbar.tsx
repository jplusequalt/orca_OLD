import React from 'react';
import { Nav, NavbarItem, LogoText, LogoIcon } from '../styles/Navbar.styled';
import { Avatar, Typography } from '@mui/material';
import { ReactComponent as Orca } from '../svg/orca.svg';

export const Navbar = () => {
  return (
    <Nav>
      <NavbarItem>
        <LogoIcon>
          <Orca />
        </LogoIcon>
        <LogoText variant='h4'>orca</LogoText>
      </NavbarItem>
      <NavbarItem>
        <Avatar 
          sx={{
            width: '1.75rem',
            height: '1.75rem',
          }}
        />
        <Typography variant='h6'>User</Typography>
      </NavbarItem>
    </Nav>
  );
}
