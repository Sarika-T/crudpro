import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AboutIcon, HomeIcon, TaskIcon } from '../../assets/icon';

export default function TemporaryDrawer(props) {
    const {open, setOpen, setPage, activePage, setActivePage} = props;

    const handleClose = () => {
        setOpen(false);
    }

    const handleMenuClick = (page) => {
        setPage(page);
        setActivePage(page);
        handleClose();
    }

    const menuItems = [
        { text: 'Home', icon: <HomeIcon /> },
        { text: 'Tasks', icon: <TaskIcon /> },
        { text: 'About', icon: <AboutIcon /> },
    ];

  const DrawerList = (
    <Box  sx={{ width: 250, backgroundColor:'#2c3e50', color:'#ecf0f1', fontSize:'18px', padding: '20px', height: '100%' }} role="presentation" onClick={handleClose}>
      <List sx={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '30px'}}>
        {menuItems.map((item, index) => (
            <ListItem key={item.text} disablePadding>
                <ListItemButton sx={{
                    backgroundColor: activePage === item.text ? '#34495e' : 'transparent',
                    '&:hover': { backgroundColor: '#34495e' },
                    }} onClick={() => handleMenuClick(item.text)}>
                    <ListItemIcon sx={{ color: '#ecf0f1' }}>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                </ListItemButton>
             </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer className='drawer-list' open={open} onClose={handleClose}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
