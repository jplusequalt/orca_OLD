import { KanbanBoard, KanbanColumn, KanbanHeader, KanbanRowHeader, KanbanWrapper, ToggleSideMenu, ToggleSideMenuIcon } from '../styles/Board.styled';
import React, { SetStateAction, Dispatch, useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Box, Grid, Typography, Fab, Popover } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import AddIcon from '@mui/icons-material/Add';
import { theme } from '../Theme';
import { TaskPreview } from './TaskPreview';
import { AddTask } from './AddTask';
import { Task } from '../model/Task';
import { useTasks } from '../hooks/useTasks';
import { v4 as uuid } from 'uuid';

export type BoardProps = {
  sideMenuToggle: Dispatch<SetStateAction<boolean>>,
  sideMenuOpen: boolean
}

const itemsFromBackend = [
  { id: uuid(), content: new Task('Test 1', '', '', '', '') },
  { id: uuid(), content: new Task('Test 2', '', '', '', '') },
  { id: uuid(), content: new Task('Test 3', '', '', '', '') },
  { id: uuid(), content: new Task('Test 4', '', '', '', '') },
];

const columnsFromBackend = {
  [uuid()]: {
    name: "Requested",
    items: itemsFromBackend
  },
  [uuid()]: {
    name: "To do",
    items: []
  },
  [uuid()]: {
    name: "In Progress",
    items: []
  },
  [uuid()]: {
    name: "Done",
    items: []
  }
};

export const Board: React.FC<BoardProps> = ({ sideMenuToggle, sideMenuOpen }) => {
  
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [newTask, setNewTask] = useState<boolean>(false);
  const open = Boolean(anchorEl);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const { tasks, setTasks } = useTasks();

  const displayTasks = (items: any[]) => {
    return items.map((task, index) => {
      return <Draggable key={task.content.id} draggableId={task.content.id} index={index}>
        {(provided) => {
          return <Box ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <TaskPreview contents={task.content} />
          </Box>
        }}
      </Draggable>
    });
  }
  
  const handleNewTask = (newTask: Task) => {
    setTasks(tasks.concat(newTask));
  }

  const [columns, setColumns] = useState(columnsFromBackend);
  
  // @ts-ignore
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    
    const { source, destination } = result;

    console.log(source);
    console.log(destination);
    
    
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      });
    }
  }
  
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
          { /* @ts-ignore */ }
          <DragDropContext onDragEnd={result => handleDragEnd(result)}>
            {Object.entries(columns).map(([name, items]) => {
              return <KanbanColumn key={name}>
                <Box>
                  <KanbanRowHeader>
                    <CircleIcon sx={{ fill: '#3ecffc', width: '1rem' }} />
                    { name }
                  </KanbanRowHeader>
                </Box>
                  <Droppable droppableId={name} key={name}>
                    {(provided) => {
                      return <Box
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      sx={{ height: '60rem', width: '100%' }}
                      >
                        { displayTasks(items.items) }
                        { provided.placeholder }
                      </Box>
                    }}
                  </Droppable>
              </KanbanColumn>
            })}
          </DragDropContext>
        </KanbanBoard>
      </KanbanWrapper>
      { newTask && <AddTask open={newTask} handleOpen={setNewTask} handleNewTask={handleNewTask} /> }
    </Box>
  );
}
