import React, { useState } from 'react';
import Sidebar from '../../component/Sidebar';
import Login from '../Login/Login';
import '../../component/sidebar.css';
import Appointment from './Appointment';

const Doctor = () => {
  const [selectedPage, setSelectedPage] = useState('Homea');

  console.log("selectedPage",selectedPage)
  return (
      <div className='container'>
      <div className="item">  
            <Sidebar   setSelectedPage={setSelectedPage}/>
      </div>
      <div className="item2">
      <h2> Doctor</h2>

         {selectedPage ==='Appoinment'?(
          <Appointment/>
         ) :selectedPage ==='Profile'?(
           <div>This is the Profile Page.</div>
         ):selectedPage ==='Profile1'?(
          <div>This is the Profile Page.</div>

        ): (
          <div>Page not found.</div>
        )
      } 

      </div>
      
      </div>
      
  )
}

export default Doctor;