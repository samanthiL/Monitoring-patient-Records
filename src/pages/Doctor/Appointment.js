import React, { useEffect, useState } from 'react';
const Appointment = () => {
const [appointmentData,setAppointmentData] = useState([])

  useEffect(()=>{
fetch('http://localhost:3001/users')
.then(res=>res.json())
.then(data =>setAppointmentData(data))
.catch(console.error);

  },[])

console.log("appointmentData",appointmentData)
  return (
    <div>
      <h2> Appointment</h2>
    <table>
        <thead>
        <th>#</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>

        </thead>
       <tbody>
        {appointmentData.map((items) => (
                <tr key={items.id}> 
                <td>{items.id}</td>
                <td>{items.name}</td>
                <td>{items.gender}</td>
                <td>{items.department}</td>
                </tr>
            
        ))}
       </tbody>
    </table>
    </div>
  );
}

export default Appointment;