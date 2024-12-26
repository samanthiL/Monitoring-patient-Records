// import React from 'react';
// import './sidebar.css';
//  import {AdminSideData, SideData} from './sideData';
// import { PatientSideData } from './sideData';

// import { Link } from 'react-router-dom';
// const Sidebar = ({setSelectedPage}) => {
//   const role = localStorage.getItem("role");
//   console.log("Role retrieved from localStorage:", role);

//   const SidebarItems = role ==='Patient' ? AdminSideData :SideData;

//   return (
//     <div className='navMenu'>
//       <h2> Sidebar</h2>
//     <nav className='sideBar'>
//       <ul className='menuBar'>
//         {SidebarItems.map((items,index)=>{
//   return(
//   <li key={index} className='navText'>
//     <Link onClick={() => setSelectedPage(items.path1)}>
//     {items.icon}
//     <span>   {items.title}</span>
//     </Link>
              
//            </li>
// )})}
     
//       </ul>
//     </nav>
//     </div>
//   );
// }

// export default Sidebar;

// // import React from 'react';
// // import './sidebar.css';
// // import { Link } from 'react-router-dom';

// // const Sidebar = ({ pages,setSelectedPage }) => {
// //   return (
// //     <div className="navMenu">
// //       <h2>Main</h2>
// //       <nav className="sideBar">
// //         <ul className="menuBar">
// //           {pages.map((item, index) => (
// //             <li key={index} className="navText">
// //               <Link
// //   onClick={() => {
// //     console.log('Item Key:', item.key); // Log the key
// //     setSelectedPage(item.key); // Update the selected page when clicked
// //   }}
// // >
// //   {item.icon}
// //   <span style={{ padding: '10px' }}>{item.key}</span>
// // </Link>
// //             </li>
// //           ))}
// //         </ul>
// //       </nav>
// //     </div>
// //   );
// // };

// // export default Sidebar;
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

const SideBar = () => {
  const userRole = localStorage.getItem('role'); // Get role from localStorage
console.log("userRole",userRole)
  const menuItems =
    userRole === 'Admin'
      ? [
          // { text: 'adminDashboard', icon: <DashboardIcon />, path: '/adminDashboard' },
          // {
          //   text: 'SDP',
          //   icon: <DashboardIcon />,
          //   children: [
          //     { text: 'Dashboard', icon: <DashboardIcon />, path: '/hr' },
          //     { text: 'Onboarding', icon: <DashboardIcon />, path: '/onboarding' },
          //     { text: 'Team Allocation', icon: <DashboardIcon />, path: '/teamoverview' },
          //     { text: 'Project Allocation', icon: <DashboardIcon />, path: '/projectDashboard' },
          //     { text: 'Certificates', icon: <DashboardIcon />, path: '/sdp/certificates' },
          //     { text: 'Training', icon: <DashboardIcon />, path: '/sdp/training' },
          //   ],
          // },
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
          { text: 'SDP', icon: <DashboardIcon />, path: '/sdp' },
          { text: 'Onboarding', icon: <DashboardIcon />, path: '/onboarding' },
          { text: 'Certificates', icon: <DashboardIcon />, path: '/onboarding/certificates' },
          { text: 'Team Allocation', icon: <DashboardIcon />, path: '/teamoverview' },
          { text: 'Project Allocation', icon: <DashboardIcon />, path: '/projectDashboard' },
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
        {userRole === 'Admin' ? 'Admin' : userRole === 'Patient'? 'Patient':'User'}
      </Typography>
      <List>{renderMenu(menuItems)}</List>
    </Box>
  );
};

export default SideBar;
