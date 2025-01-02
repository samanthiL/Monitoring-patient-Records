import React, { useState } from 'react';
import {
  Box,
  Drawer,
  Grid
} from '@mui/material';
import SideBar from './component/Sidebar';
import Navbar from './component/Navbar';

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Grid container sx={{ height: '100vh' }}>
      {/* Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        onClose={toggleSidebar}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            width: '240px',
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: '#f4f4f4',
            height: '100%',
            padding: '16px',
          }}
        >
          <SideBar />
        </Box>
      </Drawer>
      <Grid
        item
        xs={0}
        sm={3}
        md={2}
        sx={{
          backgroundColor: '#f4f4f4',
          padding: '16px',
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
        }}
      >
        <SideBar />
      </Grid>

      <Grid item xs={12} sm={9} md={10} sx={{ display: 'flex', flexDirection: 'column' }}>
        <Navbar onMenuClick={toggleSidebar} />

        <Box sx={{ flex: 1, padding: '16px', overflowY: 'auto' }}>
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Layout;
