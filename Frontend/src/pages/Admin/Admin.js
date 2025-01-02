import React, { useState } from 'react';
import Sidebar from '../../component/Sidebar';
import '../../component/sidebar.css';
import Home from '../Home/Home';

const Admin = () => {
  const adminPages = [
    { key: 'Appointments', component: <div>This is the Appointments Page.</div> },
    { key: 'DoctorList', component: <div>This is the Doctor List Page.</div> },
    { key: 'PatientList', component: <div>This is the Patient List Page.</div> },
  ];

  return <Home role="Admin" pages={adminPages} />;


  // const [selectedPage, setSelectedPage] = useState('Homea');

  // console.log("selectedPage",selectedPage)
  // return (
  //     <div className='container'>
  //     <div className="item">  
  //           <Sidebar   setSelectedPage={setSelectedPage}/>
  //     </div>
  //     <div className="item2">
  //     <h2> Doctor</h2>

        
  //     {selectedPage ==='Appointments'?(
  //          <div>This is the aaaaa Page.</div>
  //         ) :selectedPage ==='DoctorList'?(
  //          <div>This is the aaaaaaa Page.</div>
  //        ):selectedPage ==='PatientList'?(
  //         <div>This is the Profile Page.</div>

  //       ): (
  //         <div>Page not found.</div>
  //       )
  //     } 


  //     </div>
      
  //     </div>
      
  // )
}

export default Admin;