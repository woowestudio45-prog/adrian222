import React, { useState } from 'react';
// Importamos el servicio de IA que configuramos ayer
import { geminiService } from './services/geminiService';

function App() {
  const [seccionActual, setSeccionActual] = useState('mensajeria-ia');

  return (
    <div style={{ display: 'flex', minHeight: 'screen', backgroundColor: '#020617', color: 'white', fontFamily: 'sans-serif' }}>
      {/* Menú Lateral con tu nuevo orden */}
      <nav style={{ width: '260px', backgroundColor: '#0f172a', borderRight: '1px solid #1e293b', padding: '20px' }}>
        <h1 style={{ color: '#3b82f6', fontSize: '24px', fontWeight: 'bold', marginBottom: '40px' }}>JEEMIA AI</h1>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li onClick={() => setSeccionActual('mensajeria-ia')} style={{ padding: '12px', cursor: 'pointer', borderRadius: '8px', backgroundColor: seccionActual === 'mensajeria-ia' ? '#2563eb' : 'transparent', marginBottom: '10px' }}>1. Mensajería IA</li>
          <li onClick={() => setSeccionActual('base-datos')} style={{ padding: '12px', cursor: 'pointer', borderRadius: '8px', backgroundColor: seccionActual === 'base-datos' ? '#2563eb' : 'transparent', marginBottom: '10px' }}>2. Mensajería con Base</li>
          <li onClick={() => setSeccionActual('imagenes')} style={{ padding: '12px', cursor: 'pointer', borderRadius: '8px', backgroundColor: seccionActual === 'imagenes' ? '#2563eb' : 'transparent', marginBottom: '10px' }}>3. Imágenes (Nano Banana)</li>
          <li onClick={() => setSeccionActual('audios')} style={{ padding: '12px', cursor: 'pointer', borderRadius: '8px', backgroundColor: seccionActual === 'audios' ? '#2563eb' : 'transparent', marginBottom: '10px' }}>4. Audios (Google AI)</li>
          <li onClick={() => setSeccionActual('dashboard')} style={{ padding: '12px', cursor: 'pointer', borderRadius: '8px', backgroundColor: seccionActual === 'dashboard' ? '#2563eb' : 'transparent' }}>5. Dashboard Analítica</li>
        </ul>
      </nav>

      {/* Área de Trabajo Principal */}
      <main style={{ flex: 1, padding: '40px' }}>
        {seccionActual === 'mensajeria-ia' && (
          <div>
            <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>🚀 Soporte IA - Mensajería Masiva</h2>
            <p style={{ color: '#94a3b8', marginBottom: '20px' }}>Pega los números para analizar la estrategia de envío.</p>
            <textarea id="telefonos" style={{ width: '100%', height: '150px', backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px', color: 'white', padding: '15px', marginBottom: '15px' }} placeholder="54911223344, 54911556677..." />
            <textarea id="mensaje" style={{ width: '100%', height: '100px', backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px', color: 'white', padding: '15px', marginBottom: '20px' }} placeholder="Escribe el mensaje de tu campaña..." />
            <button style={{ backgroundColor: '#2563eb', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Consultar Soporte IA (Horarios y Frecuencia)</button>
          </div>
        )}

        {seccionActual === 'dashboard' && (
          <div>
            <h2 style={{ fontSize: '28px', marginBottom: '30px' }}>📊 Dashboard de Análisis</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px' }}>
              <div style={{ padding: '20px', backgroundColor: 'rgba(59, 130, 246, 0.1)', border: '1px solid #3b82f6', borderRadius: '15px', textAlign: 'center' }}>
                <h3 style={{ color: '#60a5fa' }}>CALIENTES</h3>
                <p style={{ fontSize: '32px', margin: '10px 0' }}>0</p>
              </div>
              <div style={{ padding: '20px', backgroundColor: 'rgba(249, 115, 22, 0.1)', border: '1px solid #f97316', borderRadius: '15px', textAlign: 'center' }}>
                <h3 style={{ color: '#fb923c' }}>TIBIOS</h3>
                <p style={{ fontSize: '32px', margin: '10px 0' }}>0</p>
              </div>
              <div style={{ padding: '20px', backgroundColor: 'rgba(148, 163, 184, 0.1)', border: '1px solid #94a3b8', borderRadius: '15px', textAlign: 'center' }}>
                <h3 style={{ color: '#cbd5e1' }}>FRÍOS</h3>
                <p style={{ fontSize: '32px', margin: '10px 0' }}>0</p>
              </div>
            </div>
            <div style={{ backgroundColor: '#0f172a', padding: '20px', borderRadius: '12px', border: '1px solid #1e293b', color: '#64748b', textAlign: 'center' }}>
              Informes diarios y semanales se generarán automáticamente.
            </div>
          </div>
        )}
        
        {/* Los otros módulos (2, 3 y 4) se activarán con el mismo estilo */}
      </main>
    </div>
  );
}

export default App;
