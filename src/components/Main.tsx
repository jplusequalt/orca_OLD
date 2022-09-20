import { Box } from '@mui/material'
import React, { useState } from 'react'
import { Board } from './Board'
import { Navbar } from './Navbar'
import { SideMenu } from './SideMenu'

export const Main = () => {

  const [sideMenuOpen, setSideMenuOpen] = useState(true);

  return (
    <Box sx={{ display: 'flex' }}>
      <SideMenu visible={sideMenuOpen} />
      <Board sideMenuToggle={setSideMenuOpen} sideMenuOpen={sideMenuOpen} />
    </Box>
  )
}
