import React from 'react';
import './sidebar.css';
 import {SideData} from './sideData';
import { PatientSideData } from './sideData';

import { Link } from 'react-router-dom';
const Sidebar = ({setSelectedPage}) => {
  const role = localStorage.getItem("role");
  console.log("Role retrieved from localStorage:", role);

  const SidebarItems = role ==='Patient' ? PatientSideData :SideData;

  return (
    <div className='navMenu'>
      <h2> Sidebar</h2>
    <nav className='sideBar'>
      <ul className='menuBar'>
        {SidebarItems.map((items,index)=>{
  return(
  <li key={index} className='navText'>
    <Link onClick={() => setSelectedPage(items.path1)}>
    {items.icon}
    <span>   {items.title}</span>
    </Link>
              
           </li>
)})}
     
      </ul>
    </nav>
    </div>
  );
}

export default Sidebar;