import { Box, Drawer } from '@mui/material';
import { theme } from '../Theme';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';

const drawerWidth = 300;

type SideMenuProps = {
  visible: boolean
}

export const SideMenu: React.FC<SideMenuProps> = ({ visible }) => {

  return (
    <Drawer 
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        ['& .MuiDrawer-paper']: {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: theme.palette.background.paper
        }
      }}
      variant="persistent"
      anchor="left"
      open={visible}
    >
      <Box sx={{ height: '5.5rem' }} />
      <List>
        {['Board 1', 'Board 2', 'Board 3'].map(board => 
          <ListItem key={board} 
            sx={{
              '&:hover': {
                  backgroundColor: '#232c3a'
                }
            }}>
            <ListItemButton
              sx={{
                '&:hover': {
                  backgroundColor: 'transparent'
                }
              }}>
              <ListItemIcon 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem'
                  }} >
                <DashboardIcon sx={{ fill: theme.palette.primary.light }} />
                <ListItemText primary={board} sx={{ color: theme.palette.primary.light }} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Drawer>
  );
}
