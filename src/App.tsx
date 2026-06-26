import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stack from './pages/Stack';
import Privacy from './pages/Privacy';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/privacidad" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
}
