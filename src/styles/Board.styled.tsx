import ChevronLeft from "@mui/icons-material/ChevronLeft";
import { Box, IconButton, styled } from "@mui/material";

export const KanbanBoard = styled('div', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(5),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: -300,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export const ToggleSideMenu = styled(ChevronLeft)<{
  reversed: boolean;
}>(({ reversed }) => ({
  color: 'white',
  width: '2rem',
  height: '2rem',
  marginLeft: 0,
  transform: !reversed ? 'rotate(180deg)' : 'rotate(0deg)',
  '&:hover': {
    filter: 'brightness(0.8)'
  }
}));