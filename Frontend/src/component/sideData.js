import React from 'react';
import { AiFillAccountBook } from "react-icons/ai";

const SideData = [

{
    title:'Appoinment',
    path:'/doctor',
    path1:'Appoinment',
   icon: <AiFillAccountBook />
},
{
    title:'Profile',
    path:'/login',
    path1:'Profile',
   icon: <AiFillAccountBook />
},
{
    title:'PatientHistory',
    path:'/',
    path1:'PatientHistory',
   icon: <AiFillAccountBook />
}
]

const PatientSideData = [
    {
        title:'Records',
        path:'/records',
        path1:'Records',
       icon: <AiFillAccountBook />
    },
    {
        title:'Patient profile',
        path:'/userProfile',
        path1:'UserProfile',
       icon: <AiFillAccountBook />
    }
    ]
    
    const AdminSideData = [
        {
            title:'Appointments',
            path1:'Appointments',
           icon: <AiFillAccountBook />
        },
        {
            title:'DoctorList',
            path1:'DoctorList',
           icon: <AiFillAccountBook />
        },
        {
            title:'Doctors',
            path1:'Doctors',
           icon: <AiFillAccountBook />
        },
        {
            title:'Invoice',
            path1:'Invoice',
           icon: <AiFillAccountBook />
        }
        ] 
export { SideData, PatientSideData ,AdminSideData}; 
