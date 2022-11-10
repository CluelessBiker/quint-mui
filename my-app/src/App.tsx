import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './modules/navbar/components/Navbar';
import NavbarTwo from './modules/navbar/components/NavbarTwo';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavbarTwo />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
