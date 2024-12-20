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

import React from 'react';
import './sidebar.css';
import { AdminSideData, SideData, PatientSideData } from './sideData';
import { Link } from 'react-router-dom';

const Sidebar = ({ setSelectedPage }) => {
  const role = localStorage.getItem('role'); // Retrieve the role from localStorage
  console.log('Role retrieved from localStorage:', role);

  // Select the Sidebar items based on the role
  let SidebarItems = [];
  if (role === 'Admin') {
    SidebarItems = AdminSideData;
  } else if (role === 'Patient') {
    SidebarItems = PatientSideData;
  } else {
    SidebarItems = SideData;
  }

  return (
    <div className="navMenu">
      <h2>Sidebar</h2>
      <nav className="sideBar">
        <ul className="menuBar">
          {SidebarItems.map((item, index) => (
            <li key={index} className="navText">
              <Link onClick={() => setSelectedPage(item.path1)}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
