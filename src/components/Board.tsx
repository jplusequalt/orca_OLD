import { KanbanBoard, KanbanHeader, KanbanRow, KanbanWrapper, ToggleSideMenu, ToggleSideMenuIcon } from '../styles/Board.styled';
import React, { SetStateAction, Dispatch } from 'react';
import { Box, Grid, Typography, Fab, Popover } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import AddIcon from '@mui/icons-material/Add';
import { theme } from '../Theme';
import { TaskPreview } from './TaskPreview';

type BoardProps = {
  sideMenuToggle: Dispatch<SetStateAction<boolean>>
  sideMenuOpen: boolean
}

export const Board: React.FC<BoardProps> = ({ sideMenuToggle, sideMenuOpen }) => {

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box sx={{ width: '100%', display: 'flex' }}>
      <KanbanWrapper open={sideMenuOpen}>
        <ToggleSideMenu
          onClick={() => { sideMenuToggle(!sideMenuOpen) }}
          open={sideMenuOpen}
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          >
          <ToggleSideMenuIcon open={sideMenuOpen} />
          <Popover
            id="mouse-over-popover"
            sx={{
              pointerEvents: 'none',
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'left',
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
        <Typography sx={{ p: 1 }}>{ sideMenuOpen ? 'Hide' : 'Expand' }</Typography>
        </Popover>
        </ToggleSideMenu>
        <Box>
          <KanbanHeader>
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
          </KanbanHeader>
        </Box>
        <KanbanBoard container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <KanbanRow container xs={3}>
            <Grid item>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <CircleIcon sx={{ fill: '#3ecffc', width: '1rem' }} />
                Todo
              </Box>
            </Grid>
            <Grid item>
              <TaskPreview />
            </Grid>
          </KanbanRow>
          <KanbanRow container xs={3}>
            <Grid item>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <CircleIcon sx={{ fill: '#3ecffc', width: '1rem' }} />
                Todo
              </Box>
            </Grid>
            <Grid item>
              <TaskPreview />
            </Grid>
            <Grid item>
              <TaskPreview />
            </Grid>
          </KanbanRow>
          <KanbanRow container xs={3}>
            <Grid item>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <CircleIcon sx={{ fill: '#3ecffc', width: '1rem' }} />
                Todo
              </Box>
            </Grid>
            <Grid item>
              <TaskPreview />
            </Grid>
          </KanbanRow>
        </KanbanBoard>
      </KanbanWrapper>
    </Box>
  );
}
