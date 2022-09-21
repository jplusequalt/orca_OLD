import React, { SetStateAction, Dispatch } from 'react';
import { Box, Grid, Typography, Fab, Card } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { KanbanBoard, ToggleSideMenu, ToggleSideMenuIcon } from '../styles/Board.styled';
import { theme } from '../Theme';
import CircleIcon from '@mui/icons-material/Circle';

type BoardProps = {
  sideMenuToggle: Dispatch<SetStateAction<boolean>>
  sideMenuOpen: boolean
}

export const Board: React.FC<BoardProps> = ({ sideMenuToggle, sideMenuOpen }) => {

  console.log(sideMenuOpen);

  return (
    <Box sx={{ width: '100%', display: 'flex' }}>
      <KanbanBoard open={sideMenuOpen}>
        <ToggleSideMenu
          onClick={() => { sideMenuToggle(!sideMenuOpen) }}
          open={sideMenuOpen}
          >
          <ToggleSideMenuIcon open={sideMenuOpen} />
        </ToggleSideMenu>
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3rem' }}>
            <Typography variant='h4'>Board name</Typography>
            <Fab 
              variant='extended' 
              sx={{
                backgroundColor: theme.palette.background.paper,
                '&:hover': {
                  backgroundColor: '#848daf',
                },
                color: 'white'
              }}>
              <AddIcon />
              Add Task
            </Fab>
          </Box>
        </Box>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ paddingLeft: '1.5rem', paddingRight: '1rem', maxHeight: '62rem', overflowY: 'auto' }}>
          <Grid container xs={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2.5rem', paddingRight: '1.5rem' }}>
            <Grid item>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <CircleIcon sx={{ fill: '#3ecffc', width: '1rem' }} />
                Todo
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ borderRadius: '5px', backgroundColor: theme.palette.background.paper, padding: '1rem' }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto harum quasi pariatur dignissimos obcaecati quibusdam necessitatibus, porro hic ad voluptate aliquid aut, unde provident officiis ducimus sequi reiciendis earum consequatur.
              </Box>
            </Grid>
          </Grid>
          <Grid container xs={3} sx={{ display: 'flex', flexDirection: 'column', height: '60rem', alignItems: 'flex-start' }}>
            <Grid item xs={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <CircleIcon sx={{ fill: '#3ecffc', width: '1rem' }} />
                Todo
              </Box>
            </Grid>
            <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
              Test
            </Grid>
          </Grid>
          <Grid container xs={3} sx={{ display: 'flex', flexDirection: 'column', height: '60rem', alignItems: 'flex-start' }}>
            <Grid item xs={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <CircleIcon sx={{ fill: '#3ecffc', width: '1rem' }} />
                Todo
              </Box>
            </Grid>
            <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              Test
            </Grid>
          </Grid>
        </Grid>
      </KanbanBoard>
    </Box>
  );
}
