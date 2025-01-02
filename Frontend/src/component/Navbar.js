import React from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ onMenuClick }) => {
  const navigate = useNavigate();

  const profileNavigation = () => {
    navigate('/profile');
  };

  const loginNaviagation = () => {
    navigate("/")
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'block', sm: 'none' } }}
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Typography variant="h6" onClick={profileNavigation} component="div">
            Profile
          </Typography>
          <Typography variant="h6" onClick={loginNaviagation} component="div">
            Log in
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
