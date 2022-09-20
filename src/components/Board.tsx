import React, { SetStateAction, Dispatch } from 'react';
import { Box, Grid, IconButton, Paper, styled, Typography, Fab, Card } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { KanbanBoard, ToggleSideMenu, ToggleSideMenuIcon } from '../styles/Board.styled';
import { theme } from '../Theme';

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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5rem' }}>
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
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <Card>

            </Card>
          </Grid>
        </Grid>
      </KanbanBoard>
    </Box>
  );
}
