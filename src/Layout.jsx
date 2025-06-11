// src/Layout.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: '15px 20px', backgroundColor: '#ffb6c1', color: '#4a2c38', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <nav style={{ display: 'flex', gap: '20px', fontWeight: '600', fontSize: '1.1rem' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#4a2c38', transition: 'color 0.3s' }} 
                onMouseEnter={e => e.target.style.color = '#ff69b4'}
                onMouseLeave={e => e.target.style.color = '#4a2c38'}>
            Inicio
          </Link>
          <Link to="/about" style={{ textDecoration: 'none', color: '#4a2c38', transition: 'color 0.3s' }}
                onMouseEnter={e => e.target.style.color = '#ff69b4'}
                onMouseLeave={e => e.target.style.color = '#4a2c38'}>
            Acerca de
          </Link>
        </nav>
      </header>

      <main style={{ flexGrow: 1, padding: '30px 20px', backgroundColor: '#fff0f6', color: '#4a2c38', minHeight: '60vh' }}>
        <Outlet />
      </main>

      <footer style={{ padding: '15px 20px', backgroundColor: '#ffb6c1', color: '#4a2c38', textAlign: 'center', fontWeight: '500', fontSize: '0.9rem' }}>
        <p>Realizado por <strong>Mayra Alejandra Galván García</strong> - Estudiante de Ingeniería © 2025</p>
      </footer>
    </div>
  );
};

export default Layout;
