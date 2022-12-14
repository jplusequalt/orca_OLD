import { KanbanBoard, KanbanColumn, KanbanHeader, KanbanRowHeader, KanbanWrapper, ToggleSideMenu, ToggleSideMenuIcon } from '../styles/Board.styled';
import React, { SetStateAction, Dispatch, useState } from 'react';
import { Box, Grid, Typography, Fab, Popover } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import AddIcon from '@mui/icons-material/Add';
import { theme } from '../Theme';
import { TaskPreview } from './TaskPreview';
import { AddTask } from './AddTask';
import { Task } from '../model/Task';
import { useTasks } from '../hooks/useTasks';

type BoardProps = {
  sideMenuToggle: Dispatch<SetStateAction<boolean>>
  sideMenuOpen: boolean
}

export const Board: React.FC<BoardProps> = ({ sideMenuToggle, sideMenuOpen }) => {

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [newTask, setNewTask] = useState<boolean>(false);

  const { tasks, setTasks } = useTasks();

  const handleNewTask = (newTask: Task) => {
    setTasks(tasks.concat(newTask));
  }

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  
  return (
    <Box 
      sx={{ 
        width: '100%', 
        display: 'flex'
      }}>
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
              }}
              onClick={() => setNewTask(true)}
              >
              <AddIcon />
              Add Task
            </Fab>
          </KanbanHeader>
        </Box>
        <KanbanBoard>
          <KanbanColumn>
            <Box>
              <KanbanRowHeader>
                <CircleIcon sx={{ fill: '#3ecffc', width: '1rem' }} />
                Todo
              </KanbanRowHeader>
            </Box>
            {
              tasks.filter(task => task.status === 'Todo').map((todos, i) => {
                return <Grid item key={todos.tag}>
                  <TaskPreview contents={todos} />
                </Grid>
              })
            }
          </KanbanColumn>
          <KanbanColumn>
            <Box>
              <KanbanRowHeader>
                <CircleIcon sx={{ fill: '#ce3b3b', width: '1rem' }} />
                Blocked
              </KanbanRowHeader>
            </Box>
            {
              tasks.filter((task: Task) => task.status === 'Blocked').map((blocked, i) => {
                return <Grid item key={blocked.tag}>
                  <TaskPreview contents={blocked} />
                </Grid>
              })
            }
          </KanbanColumn>
          <KanbanColumn>
            <Box>
              <KanbanRowHeader>
                <CircleIcon sx={{ fill: '#c03efc', width: '1rem' }} />
                In Progress
              </KanbanRowHeader>
            </Box>
            {
              tasks.filter((task: Task) => task.status === 'In Progress').map((progress, i) => {
                return <Grid item key={progress.tag}>
                  <TaskPreview contents={progress} />
                </Grid>
              })
            }
          </KanbanColumn>
          <KanbanColumn>
            <Box>
              <KanbanRowHeader>
                <CircleIcon sx={{ fill: '#26c94a', width: '1rem' }} />
                Completed
              </KanbanRowHeader>
            </Box>
            {
              tasks.filter((task: Task) => task.status === 'Completed').map((completed, i) => {
                return <Grid item key={completed.tag}>
                  <TaskPreview contents={completed} />
                </Grid>
              })
            }
          </KanbanColumn>
        </KanbanBoard>
      </KanbanWrapper>
      { newTask && <AddTask open={newTask} handleOpen={setNewTask} handleNewTask={handleNewTask} /> }
    </Box>
  );
}
