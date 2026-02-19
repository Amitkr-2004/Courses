import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Courses from './pages/Courses';
import Enrolled from './pages/Enrolled';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/courses" element={<Courses />} />
        <Route path="/enrolled" element={<Enrolled />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
