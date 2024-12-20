import React, { useState } from 'react';
import Sidebar from '../../component/Sidebar';
import Records from './Records';

const Patient = () => {
  const [selectedPage, setSelectedPage] = useState('Records');
 
  return (
    <div>
      <h2> Patient</h2>
      
      <div className='container'>

      
<div className="item">  
            <Sidebar   setSelectedPage={setSelectedPage}/>
      </div>
      <div className="item2">

         {selectedPage ==='Records'?(
  <Records/>
) :selectedPage ==='Profile'?(
           <div>This is the Profile Page.</div>
         ):selectedPage ==='Profile1'?(
          <div>This is the Profile1 Page.</div>

        ): (
          <div>Page not found.</div>
        )
      }  





      </div>
      </div>
      </div>
 
  )
}

export default Patient;