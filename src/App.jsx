import { Routes, Route } from 'react-router-dom';
import LandingHome from './LandingHome.jsx';
import Diagnostic from './diagnostic.jsx';

function App() {
  return (
    <Routes>
      <Route path="/NetSpeed/" element={<LandingHome />} />
      <Route path="/diagnostic" element={<Diagnostic />} />
    </Routes>
  );
}

export default App;