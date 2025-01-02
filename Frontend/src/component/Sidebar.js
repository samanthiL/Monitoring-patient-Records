import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  ListItemIcon,
  Collapse,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  ExpandMore,
  ExpandLess,
} from '@mui/icons-material';
import './sidebar.css';
const SideBar = () => {
  const userRole = localStorage.getItem('role'); // Get role from localStorage
console.log("userRole",userRole)
  const menuItems =
    userRole === 'Admin'
      ? [
          { text: 'Appointments', icon: <DashboardIcon />, path: '/appointments' },
          { text: 'Invoice', icon: <DashboardIcon />, path: '/Invoice' },

          { text: 'PatientList', icon: <DashboardIcon />, path: '/PatientList' },
          { text: 'DoctorList', icon: <DashboardIcon />, path: '/doctorList' },
        ]:
        userRole === 'Patient'
        ? [

          { text: 'UserProfile', icon: <DashboardIcon />, path: '/userProfile' },
          { text: 'MedicalHistory', icon: <DashboardIcon />, path: '/medicalHistory' },
        ]
      : [
          { text: 'Appointments', icon: <DashboardIcon />, path: '/docterAppointments' },
          { text: 'profile', icon: <DashboardIcon />, path: '/onboarding' },
          { text: 'Team Allocation', icon: <DashboardIcon />, path: '/teamoverview' },
        ];

  const [openMenus, setOpenMenus] = useState({});

  const handleToggle = (text) => {
    setOpenMenus((prev) => ({ ...prev, [text]: !prev[text] }));
  };

  const renderMenu = (items) =>
    items.map((item) => (
      <React.Fragment key={item.text}>
        <ListItem
          onClick={() => {
            if (item.children) {
              handleToggle(item.text);
            }
          }}
          component={item.path ? Link : 'div'}
          to={item.path || undefined}
          sx={{
            '&:hover': { backgroundColor: '#e0e0e0' },
            cursor: item.path ? 'pointer' : 'default',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: item.children ? 2 : 0,
          }}
        >
          <ListItemIcon sx={{ minWidth: 30 }}>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
          {item.children &&
            (openMenus[item.text] ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>
        {item.children && (
          <Collapse in={openMenus[item.text]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {renderMenu(item.children)}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    ));

  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        height: '100vh',
        width: '150px',
        padding: '10px',
      }}
    >
      <Typography
        sx={{ padding: '20px', textAlign: 'center', fontSize: '1.5rem' }}
      >
        {userRole === 'Admin' ? 'Admin' : userRole === 'Patient'? 'Patient':'Doctor'}
      </Typography>
      <List>{renderMenu(menuItems)}</List>
    </Box>
  );
};

export default SideBar;
