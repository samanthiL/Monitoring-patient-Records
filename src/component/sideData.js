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
export { SideData, PatientSideData ,AdminSideData}; 
