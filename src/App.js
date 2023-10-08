import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle";
import 'react-toastify/dist/ReactToastify.css';
import Registration from './pages/Registration/Registration';
import AddCourse from './pages/AddCourse/AddCourse';
import AddStudent from './pages/AddStudent/AddStudent';
import Dashboard from './pages/Dashboard/Dashboard';
import Attendance from './pages/Attendance/Attendance';
import AdminProtected from './components/AdminProtected';
import Protected from './components/Protected';
import NoPage from './pages/NoPage';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <Protected>
            <Dashboard />
          </Protected>
        } />
        <Route path='/registration' element={<Registration />} />
        <Route path='/addstudent' element={
          <AdminProtected>
            <AddStudent />
          </AdminProtected>
        } />
        <Route path='/addcourse' element={
          <AdminProtected>
            <AddCourse />
          </AdminProtected>
        } />
        <Route path='/attendance' element={
          <AdminProtected>
            <Attendance />
          </AdminProtected>
        } />
        <Route path='/*' element={<NoPage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
