// src/App.jsx
import { HashRouter, Routes, Route } from 'react-router-dom';
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
      Acerca de Mayra Alejandra Galvan Garcia - Estudiante de Ingeniería
    </h2>
  );
}
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}


export default App;
