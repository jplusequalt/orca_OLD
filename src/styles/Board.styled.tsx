import ChevronLeft from "@mui/icons-material/ChevronLeft";
import { Box, Fab, styled, Grid } from "@mui/material";
import { transform } from "typescript";
import { theme } from "../Theme";

export const KanbanWrapper = styled('div', { shouldForwardProp: (prop) => prop !== 'open' })<{
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
  '@media(max-width: 810px)': {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2)
  },
  marginLeft: -200,
  ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0
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
  ...(open && {
    '@media(max-width: 810px)': {
      marginLeft: '-2.5rem'
    }
  }),
  ...(!open && {
      transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    '@media(max-width: 810px)': {
      marginLeft: '1rem'
    }
  })
}));

export const KanbanHeader = styled(Box)({
  display: 'flex', 
  justifyContent: 'space-between', 
  marginBottom: '3rem',
  '@media(max-width: 810px)': {
    transform: 'scale(0.95)'
  } 
});

export const KanbanBoard = styled(Grid)({
  paddingLeft: '1.5rem', 
  paddingRight: '1rem', 
  maxHeight: '62rem', 
  overflowY: 'auto',
  '@media(max-width: 810px)': {
    paddingRight: theme.spacing(0)
  },
});

export const KanbanRowHeader = styled(Box)({
  display: 'flex', 
  alignItems: 'center', 
  gap: '1rem', 
  '@media(max-width: 810px)': {
    transform: 'scale(0.85)'
  }
});

export const KanbanRow = styled(Grid)({
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'flex-start', 
  gap: '2.5rem',
  paddingRight: 0,
  '@media(max-width: 810px)': {
    transform: 'scale(0.85)'
  }
});