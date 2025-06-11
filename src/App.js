// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import './App.css';

function Home() {
  return (
    <h1 style={{ color: '#ff69b4', textAlign: 'center', marginTop: '50px', fontWeight: '700' }}>
      Bienvenidos a la Página de Inicio
    </h1>
  );
}

function About() {
  return (
    <h2 style={{ color: '#ff69b4', textAlign: 'center', marginTop: '50px', fontWeight: '600' }}>
      Acerca de Mayra Alejandra - Estudiante de Ingeniería
    </h2>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
