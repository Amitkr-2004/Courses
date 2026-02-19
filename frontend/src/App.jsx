import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Courses from './pages/Courses';
import Enrolled from './pages/Enrolled';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Courses />} />
            <Route path="/enrolled" element={<Enrolled />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <ToastContainer position="top-right" autoClose={1500} />
    </BrowserRouter>
  );
}

export default App;
