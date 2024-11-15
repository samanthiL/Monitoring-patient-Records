import Navbar from './component/Navbar';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';  // Import Routes and Route
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Patient from './pages/Patient/Patient';
import Doctor from './pages/Doctor/Doctor';
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
     <Navbar/>
     <Routes>
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/patient" element={<Patient />} />
<Route path="/doctor" element={<Doctor/>} />
</Routes>
     </Router>

    </div>
  );
}

export default App;
