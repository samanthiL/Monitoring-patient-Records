import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Patient from './pages/Patient/Patient';
import Doctor from './pages/Doctor/Doctor';
import './App.css';
import Records from './pages/Patient/Records';
import UserProfile from './pages/Patient/UserProfile';
import DoctorList from './pages/Admin/DoctorList';
import Invoice from './pages/Admin/Invoice';
import PatientList from './pages/Admin/PatientList';
import AdminProfile from './pages/Admin/AdminProfile';
import AdminDashboard from './pages/Admin/AdminDashboard';
import Admin from './pages/Admin/Admin';
import { ToastContainer } from "react-toastify";
import Layout from './Layout';
import Dashboard from './pages/Doctor/Dashboard';
import Assignments from './pages/Assignments';
import Appointments from './pages/Doctor/Appointments';

const App = () => {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />

      <Routes>

        <Route path="/" element={<Login />} />
        <Route
          path="*"
          element={
            <Layout>
              <Routes>

                {/* doctor */}
                
                <Route path="/docterAppointments" element={<Appointments />} />

                <Route path="/doctor" element={<Doctor />} />
                <Route path="/userProfile" element={<UserProfile />} />
                <Route path="/records" element={<Records />} />
                <Route path="/dashboard" element={<Dashboard />} />
                {/* <Route path="/appointments" element={<Appointments />} /> */}
                <Route path="/doctorList" element={<DoctorList />} />
                <Route path="/patientList" element={<PatientList />} />
                <Route path="/invoice" element={<Invoice />} />
                <Route path="/adminProfile" element={<AdminProfile />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/patient" element={<Patient />} />
                <Route path="/adminDashboard" element={<AdminDashboard />} />
                <Route path="/home" element={<Home />} />
                <Route path="/Assignment" element={<Assignments />}/>

              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};
export default App;