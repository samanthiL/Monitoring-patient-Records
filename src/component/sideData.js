import React from 'react';
import { AiFillAccountBook } from "react-icons/ai";

const SideData = [
{
    title:'Dashboard',
    path:'/patient',
    path1:'Home',
   icon: <AiFillAccountBook />
},
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
    title:'Patient profile',
    path:'/',
    path1:'Settings',
   icon: <AiFillAccountBook />
}
]


export default SideData;