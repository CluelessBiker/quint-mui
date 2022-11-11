import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ModalAddEditEmployee from './modules/modals/components/ModalAddEditEmployee';
import NavbarTwo from './modules/navbar/components/NavbarTwo';
import EmployeesPage from './pages/EmployeesPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <NavbarTwo />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/chat" element={<h1>chat</h1>}/>
          <Route path="/employees" element={<EmployeesPage />}/>
          <Route path="/profile" element={<h1>profile</h1>}/>
          <Route path="/account" element={<h1>account</h1>}/>
          <Route path="/dashboard" element={<h1>dashboard</h1>}/>
        </Routes>
      </BrowserRouter>
      <ModalAddEditEmployee/>
    </div>
  );
}

export default App;
