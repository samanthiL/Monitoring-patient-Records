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
import { Link } from 'react-router-dom';

const Sidebar = ({ pages,setSelectedPage }) => {
  return (
    <div className="navMenu">
      <h2>Main</h2>
      <nav className="sideBar">
        <ul className="menuBar">
          {pages.map((item, index) => (
            <li key={index} className="navText">
              <Link
  onClick={() => {
    console.log('Item Key:', item.key); // Log the key
    setSelectedPage(item.key); // Update the selected page when clicked
  }}
>
  {item.icon}
  <span style={{ padding: '10px' }}>{item.key}</span>
</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
