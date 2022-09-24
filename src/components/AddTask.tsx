import { Dispatch, SetStateAction} from 'react';
import { Modal, Box, Select, Button, Typography, TextField } from '@mui/material';
import { theme } from '../Theme';

type AddTaskProps = {
  open: boolean,
  handleOpen: Dispatch<SetStateAction<boolean>>
}

export const AddTask: React.FC<AddTaskProps> = ({ open, handleOpen }) => {
  return (
    <Modal open={open}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '75%',
          height: '75%',
          bgcolor: 'background.paper',
          borderRadius: '8px',
          boxShadow: 24,
          p: 4,
          display: 'block'
        }}>
          <Typography>New task</Typography>
          <Box
            component='form'
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField label='Summary' variant='outlined' />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
            <Button 
              variant='text' 
              sx={{ 
                color: theme.palette.text.primary 
              }}
              onClick={() => handleOpen(false)}
              >
              Cancel
            </Button>
            <Button 
              variant='contained' 
              sx={{
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.secondary,
                fontVariant: ''
              }}
              onClick={() => handleOpen(false)}
              >
              Create
            </Button>
          </Box>
      </Box>
    </Modal>
  );
}
