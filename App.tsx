import React, { useState } from 'react';
import { geminiService } from './services/geminiService';

function App() {
  const [activeTab, setActiveTab] = useState('mensajeria-ia');

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Barra Lateral de Navegación */}
      <nav className="fixed w-64 h-full bg-slate-900 border-r border-slate-800 p-6">
        <h1 className="text-2xl font-bold text-blue-500 mb-10">JEEMIA AI</h1>
        <ul className="space-y-4">
          <li onClick={() => setActiveTab('mensajeria-ia')} className={`cursor-pointer p-3 rounded ${activeTab === 'mensajeria-ia' ? 'bg-blue-600' : 'hover:bg-slate-800'}`}>1. Mensajería IA (Masivos)</li>
          <li onClick={() => setActiveTab('base-datos')} className={`cursor-pointer p-3 rounded ${activeTab === 'base-datos' ? 'bg-blue-600' : 'hover:bg-slate-800'}`}>2. Mensajería con Base</li>
          <li onClick={() => setActiveTab('imagenes')} className={`cursor-pointer p-3 rounded ${activeTab === 'imagenes' ? 'bg-blue-600' : 'hover:bg-slate-800'}`}>3. Imágenes (Nano Banana)</li>
          <li onClick={() => setActiveTab('audios')} className={`cursor-pointer p-3 rounded ${activeTab === 'audios' ? 'bg-blue-600' : 'hover:bg-slate-800'}`}>4. Audios (Google AI)</li>
          <li onClick={() => setActiveTab('dashboard')} className={`cursor-pointer p-3 rounded ${activeTab === 'dashboard' ? 'bg-blue-600' : 'hover:bg-slate-800'}`}>5. Dashboard Analítica</li>
        </ul>
      </nav>

      {/* Contenido Principal */}
      <main className="ml-64 p-10">
        {activeTab === 'mensajeria-ia' && (
          <section>
            <h2 className="text-3xl font-bold mb-6">Soporte IA - Envío de Números Masivos</h2>
            <textarea id="num_input" className="w-full h-40 bg-slate-900 border border-slate-700 p-4 rounded-xl mb-4" placeholder="Pega tus números aquí (549...)" />
            <textarea id="msg_input" className="w-full h-24 bg-slate-900 border border-slate-700 p-4 rounded-xl mb-6" placeholder="Escribe el mensaje de la campaña..." />
            <button className="bg-blue-600 px-6 py-3 rounded-lg font-bold">Consultar Soporte IA (Horarios y Frecuencia)</button>
          </section>
        )}

        {activeTab === 'base-datos' && (
          <section>
            <h2 className="text-3xl font-bold mb-6">Carga de Base de Datos</h2>
            <div className="border-2 border-dashed border-slate-700 p-20 text-center rounded-2xl mb-6">Subir archivo Excel o CSV</div>
            <textarea className="w-full h-24 bg-slate-900 border border-slate-700 p-4 rounded-xl" placeholder="Mensaje personalizado para la base..." />
          </section>
        )}

        {activeTab === 'imagenes' && (
          <section>
            <h2 className="text-3xl font-bold mb-6">Generador Pro (Nano Banana)</h2>
            <input className="w-full p-4 bg-slate-900 border border-slate-700 rounded-xl mb-4" placeholder="Describe la imagen que deseas crear..." />
            <button className="bg-purple-600 px-6 py-3 rounded-lg font-bold">Generar Imagen Pro</button>
          </section>
        )}

        {activeTab === 'audios' && (
          <section>
            <h2 className="text-3xl font-bold mb-6">Texto a Voz (Google AI Studio)</h2>
            <textarea className="w-full h-32 bg-slate-900 border border-slate-700 p-4 rounded-xl mb-4" placeholder="Escribe el texto que Ana dirá por audio..." />
            <button className="bg-emerald-600 px-6 py-3 rounded-lg font-bold">Crear Audio de Venta</button>
          </section>
        )}

        {activeTab === 'dashboard' && (
          <section>
            <h2 className="text-3xl font-bold mb-6">Análisis de Campañas</h2>
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="bg-blue-900/30 p-6 rounded-xl border border-blue-500">
                <h3 className="text-blue-400 font-bold">CALIENTES</h3>
                <p className="text-4xl mt-2">0</p>
              </div>
              <div className="bg-orange-900/30 p-6 rounded-xl border border-orange-500">
                <h3 className="text-orange-400 font-bold">TIBIOS</h3>
                <p className="text-4xl mt-2">0</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-600">
                <h3 className="text-slate-400 font-bold">FRÍOS</h3>
                <p className="text-4xl mt-2">0</p>
              </div>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-slate-400 text-center">
              Tablas e informes diarios, semanales y mensuales aparecerán aquí tras el primer envío.
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
