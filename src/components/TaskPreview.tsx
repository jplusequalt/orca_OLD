import{ useState } from 'react';
import { CardActionArea, CardContent, Typography, Box, Avatar } from '@mui/material';
import { AssigneeAvatarPreview, TaskCard } from '../styles/TaskPreview.styled';
import { TaskModal } from './TaskModal';
import { theme } from '../Theme';

export const TaskPreview = () => {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <TaskCard>
        <CardActionArea>
          <CardContent sx={{ padding: '0.65rem' }} onClick={() => setOpen(!open)}>
            <Typography variant='subtitle1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae!</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', mt: 1 }}>
              <Box>
                <Typography sx={{ color: theme.palette.text.secondary }} variant='subtitle2'>0 of 2 subtasks</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Typography sx={{ color: theme.palette.text.secondary }} variant='subtitle2'>Tag</Typography>
                <AssigneeAvatarPreview />
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </TaskCard>
      <TaskModal open={open} handleOpen={setOpen} />
    </>
  );
}