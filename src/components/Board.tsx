import React, { SetStateAction, Dispatch } from 'react';
import { Box, Grid, IconButton, Paper, styled, Typography, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { KanbanBoard, ToggleSideMenu } from '../styles/Board.styled';
import { theme } from '../Theme';

type BoardProps = {
  sideMenuToggle: Dispatch<SetStateAction<boolean>>
  sideMenuOpen: boolean
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export const Board: React.FC<BoardProps> = ({ sideMenuToggle, sideMenuOpen }) => {

  console.log(sideMenuOpen);

  return (
    <Box sx={{ width: '100%', display: 'flex' }}>
      <KanbanBoard open={sideMenuOpen}>
        <Fab
          sx={{ 
            width: '3rem', 
            height: '3rem', 
            paddingLeft: 0, 
            marginBottom: '1.5rem', 
            backgroundColor: theme.palette.background.paper,
            '&:hover': {
              backgroundColor: '#848daf',
            },
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: '-4rem',
            ...(!sideMenuOpen && {
                transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.leavingScreen,
              }),
              marginLeft: 0
            }),
            zIndex: theme.zIndex.drawer + 1
          }} 
          onClick={() => { sideMenuToggle(!sideMenuOpen) }}>
          <ToggleSideMenu reversed={sideMenuOpen} />
        </Fab>
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5rem' }}>
            <Typography variant='h4'>Board name</Typography>
            <Fab variant='extended'>
              <AddIcon />
              Add Task
            </Fab>
          </Box>
        </Box>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>1</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>2</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>3</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>4</Item>
          </Grid>
        </Grid>
      </KanbanBoard>
    </Box>
  );
}
