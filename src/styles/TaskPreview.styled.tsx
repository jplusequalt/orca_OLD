import { Card, styled } from '@mui/material';

export const TaskCard = styled(Card)(({ theme }) => ({
  borderRadius: '8px', 
  backgroundColor: theme.palette.background.paper, 
  padding: 0
}));