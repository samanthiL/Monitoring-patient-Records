import Navbar from './component/Navbar';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';  // Import Routes and Route
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Patient from './pages/Patient/Patient';
import Doctor from './pages/Doctor/Doctor';
import './App.css';
import Records from './pages/Patient/Records';
import UserProfile from './pages/Patient/UserProfile';
import Appointments from './pages/Admin/Appointments';
import DoctorList from './pages/Admin/DoctorList';
import Invoice from './pages/Admin/Invoice';
import PatientList from './pages/Admin/PatientList';
import AdminProfile from './pages/Admin/AdminProfile';
import AdminDashboard from './pages/Admin/AdminDashboard';
import Sidebar from './component/Sidebar';
import Admin from './pages/Admin/Admin';
import { AiFillAccountBook } from 'react-icons/ai';
function App() {

    const adminPages = [
      { key: 'Appointments', component: <Appointments/> ,   icon: <AiFillAccountBook />
      },
      { key: 'DoctorList', component: <DoctorList/> , icon: <AiFillAccountBook/>},
      { key: 'PatientList', component: <PatientList/>, icon: <AiFillAccountBook/>},
      { key: 'Invoice', component: <Invoice/> , icon: <AiFillAccountBook/>},

    ];
  
    const doctorPages = [
      { key: 'Appoinment', component: <Appointments /> },
      { key: 'Profile', component: <Login /> },
      { key: 'Records', component: <Records /> },
    ];
  
    const patientPages = [
      { key: 'UserProfile', component: <div>This is the User Profile Page.</div> },
      { key: 'MedicalHistory', component: <div>This is the Medical History Page.</div> },
    ];
  
    // Role-specific configuration based on route or localStorage
    const role = localStorage.getItem('role') // Replace with your role logic
    const pages = role === 'Admin' ? adminPages : role === 'Doctor' ? doctorPages : patientPages;
  
  return (
    <div className="App">
     <Router>
     <Navbar/>
     <Routes>
<Route path="/login" element={<Login />} />
<Route path="/patient" element={<WithSidebar Component={Patient} />} />
<Route path="/home" element={<Home role={role} pages={pages} />} />

<Route path="/doctor" element={<WithSidebar Component={Doctor}/>} />
<Route path="/doctor" element={<Doctor/>} />
<Route path="/userProfile" element={<UserProfile/>} />
<Route path="/records" element={<Records/>} />
<Route path="/admin" element={<WithSidebar Component={Admin} />} />

{/* admin routes */}
<Route path="/appointments" element={<Appointments/>} />
<Route path="/doctorList" element={<DoctorList/>} />
<Route path="/invoice" element={<Invoice/>} />
<Route path="/patientList" element={<PatientList/>} />
<Route path="/adminProfile" element={<AdminProfile/>} />
<Route path="/adminDashboard" element={<AdminDashboard/>} />

</Routes>
     </Router>

    </div>
  );
}


const WithSidebar = ({ Component }) => (
  <>
    <Sidebar />
    <Component />
  </>
);

export default App;
