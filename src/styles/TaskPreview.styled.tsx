import { Card, styled, Avatar } from '@mui/material';

export const TaskCard = styled(Card)(({ theme }) => ({
  borderRadius: '8px', 
  backgroundColor: theme.palette.background.paper,
  padding: 0,
  boxSizing: 'border-box'
}));

export const AssigneeAvatarPreview = styled(Avatar)({
  width: '1rem',
  height: '1rem',
  '@media(max-width: 810px)': {
    width: '0.85rem',
    height: '0.85rem'
  }
})