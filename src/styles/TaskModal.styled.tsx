import { styled, InputBase, Avatar } from '@mui/material';

export const TaskStatus = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: 'green',
    fontSize: 16,
    padding: '5px 20px 5px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
    }
  }
}));

export const Assignee = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    border: 'none',
    position: 'relative',
    backgroundColor: 'transparent',
    fontSize: 16,
    padding: '5px 20px 5px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
    }
  },
  '& .MuiSelect-icon': {
    display: 'none'
  }
}));

export const AssigneeAvatar = styled(Avatar)({
  width: '1rem',
  height: '1rem'
});