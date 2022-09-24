import{ useState } from 'react';
import { CardActionArea, CardContent, Typography, Box, Avatar } from '@mui/material';
import { TaskCard } from '../styles/TaskPreview.styled';
import { TaskModal } from './TaskModal';

export const TaskPreview = () => {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <TaskCard>
        <CardActionArea>
          <CardContent onClick={() => setOpen(!open)}>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae!</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
              <Box>
                <Typography>0 of 2 subtasks</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Typography variant='subtitle1'>Tag</Typography>
                <Avatar 
                  sx={{
                    width: '1rem',
                    height: '1rem',
                  }}
                />
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </TaskCard>
      <TaskModal open={open} handleOpen={setOpen} />
    </>
  );
}
