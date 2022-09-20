import ChevronLeft from "@mui/icons-material/ChevronLeft";
import { Fab, styled } from "@mui/material";

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
  })
}));

export const ToggleSideMenuIcon = styled(ChevronLeft)<{
  open: boolean;
}>(({ open }) => ({
  color: 'white',
  width: '2rem',
  height: '2rem',
  marginLeft: 0,
  transform: !open ? 'rotate(180deg)' : 'rotate(0deg)',
  '&:hover': {
    filter: 'brightness(0.8)'
  }
}));

export const ToggleSideMenu = styled(Fab, { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  width: '3rem', 
  height: '3rem', 
  paddingLeft: 0, 
  marginBottom: '1.5rem', 
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: '#848daf',
  },
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  zIndex: theme.zIndex.drawer + 1,
  marginLeft: '-4rem',
  ...(!open && {
      transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0
  })
}));