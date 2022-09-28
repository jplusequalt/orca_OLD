import { Box } from '@mui/material';
import { useState } from 'react';
import { TaskProvider } from '../context/TaskProvider';
import { Board } from './Board';
import { SideMenu } from './SideMenu';

export const Main = () => {

  const [sideMenuOpen, setSideMenuOpen] = useState(true);

  return (
    <Box 
      sx={{ 
        display: 'flex'
    }}>
      <SideMenu visible={sideMenuOpen} />
      <TaskProvider>
        <Board sideMenuToggle={setSideMenuOpen} sideMenuOpen={sideMenuOpen} />
      </TaskProvider>
    </Box>
  )
}
