import React, { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState('mensajeria');
  const [numeros, setNumeros] = useState('');
  const [msg, setMsg] = useState('');
  const [ratio, setRatio] = useState('1:1');
  const [voice, setVoice] = useState('Fem 1');

  const plantillas = {
    mza_cap: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de ventas especiales de Jeep y RAM en Genco Automotores Mendoza.\nTe contacto porque sos cliente Genco y hoy tenés capital activo...",
    mza_post: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM – Genco Automotores Mendoza.\nComo ya sos parte de la familia Genco...",
    mza_fria: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM en Genco Automotores Mendoza.\nTe escribo porque en Mendoza estamos lanzando el Plan 4...",
    sr_fria: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM – Genco Automotores Mendoza.\nTe escribo porque estamos lanzando el Plan 4..."
  };

  return (
    <div className="flex min-h-screen bg-[#010409] text-white font-sans">
      {/* SIDEBAR NAVEGACIÓN */}
      <nav className="w-72 bg-[#0d1117] border-r border-white/10 p-6 flex flex-col gap-2">
        <h1 className="text-2xl font-black text-blue-500 italic mb-10 uppercase tracking-tighter">Jeemia Ultra</h1>
        <button onClick={() => setTab('mensajeria')} className={`p-4 rounded-xl font-bold text-left transition-all ${tab === 'mensajeria' ? 'bg-blue-600' : 'text-slate-500 hover:bg-white/5'}`}>💬 Mensajería Directa</button>
        <button onClick={() => setTab('ia')} className={`p-4 rounded-xl font-bold text-left transition-all ${tab === 'ia' ? 'bg-blue-600' : 'text-slate-500 hover:bg-white/5'}`}>🖼️ Nano Banana Pro</button>
        <button onClick={() => setTab('voz')} className={`p-4 rounded-xl font-bold text-left transition-all ${tab === 'voz' ? 'bg-blue-600' : 'text-slate-500 hover:bg-white/5'}`}>🎙️ Voice Studio</button>
        <button onClick={() => setTab('mail')} className={`p-4 rounded-xl font-bold text-left transition-all ${tab === 'mail' ? 'bg-blue-600' : 'text-slate-500 hover:bg-white/5'}`}>✉️ Mails Masivos IA</button>
        <button onClick={() => setTab('dashboard')} className={`p-4 rounded-xl font-bold text-left transition-all ${tab === 'dashboard' ? 'bg-blue-600' : 'text-slate-500 hover:bg-white/5'}`}>📊 Dashboard Genco</button>
      </nav>

      <main className="flex-1 p-10 overflow-y-auto">
        
        {/* 1. MENSAJERÍA DIRECTA CON ADJUNTOS */}
        {tab === 'mensajeria' && (
          <div className="max-w-4xl space-y-6">
            <h2 className="text-4xl font-black italic uppercase">Consola de Envío</h2>
            <div className="bg-[#161b22] p-8 rounded-[30px] border border-white/5 space-y-6">
              <textarea value={numeros} onChange={(e)=>setNumeros(e.target.value)} className="w-full h-24 bg-black border border-white/10 rounded-2xl p-4 text-blue-400 font-mono" placeholder="Base de números..." />
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => setMsg(plantillas.mza_cap)} className="p-3 bg-blue-900/40 border border-blue-500/50 rounded-xl text-[10px] font-black uppercase italic">📍 Capital</button>
                <button onClick={() => setMsg(plantillas.mza_post)} className="p-3 bg-purple-900/40 border border-purple-500/50 rounded-xl text-[10px] font-black uppercase italic">🛠️ Postventa</button>
              </div>
              <div className="flex items-center gap-4 p-4 bg-black rounded-2xl border border-dashed border-white/10">
                <span className="text-[10px] font-bold text-slate-500">ADJUNTAR PDF/JPG:</span>
                <input type="file" className="text-xs text-slate-500" />
              </div>
              <textarea value={msg} onChange={(e)=>setMsg(e.target.value)} className="w-full h-48 bg-black border border-white/10 rounded-3xl p-6 text-lg" />
              <button className="w-full py-6 bg-emerald-600 rounded-[30px] text-2xl font-black uppercase italic hover:bg-emerald-500 transition-all">Enviar Directo API</button>
            </div>
          </div>
        )}

        {/* 2. NANO BANANA PRO (IMÁGENES ILIMITADO) */}
        {tab === 'ia' && (
          <div className="max-w-4xl space-y-6 text-center">
            <h2 className="text-6xl font-black text-yellow-500 italic uppercase">Nano Banana Pro</h2>
            <div className="bg-[#161b22] p-8 rounded-[40px] space-y-6">
              <input type="text" className="w-full p-6 bg-black border border-white/10 rounded-2xl" placeholder="Prompt: Jeep Renegade en los Andes con nieve..." />
              <div className="flex gap-4 p-4 bg-black rounded-2xl border border-white/5 items-center justify-between text-[10px] font-black italic">
                <span>SUBIR REFERENCIA:</span>
                <input type="file" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {['1:1', '9:16', '16:9'].map(r => (
                  <button key={r} onClick={()=>setRatio(r)} className={`p-8 rounded-3xl font-black border ${ratio === r ? 'border-yellow-500 text-yellow-500' : 'border-white/5 text-slate-500'}`}>{r}</button>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button className="py-6 bg-yellow-600 rounded-[30px] font-black uppercase">Visualizar Generación</button>
                <button className="py-6 bg-blue-600 rounded-[30px] font-black uppercase">Descargar Original</button>
              </div>
            </div>
          </div>
        )}

        {/* 3. VOICE STUDIO (4 VOCES + MODULADOR) */}
        {tab === 'voz' && (
          <div className="max-w-4xl space-y-6">
            <h2 className="text-5xl font-black text-blue-400 italic uppercase text-center">Voice Studio Google AI</h2>
            <div className="bg-[#161b22] p-10 rounded-[40px] border border-blue-500/20 space-y-8">
              <textarea className="w-full h-40 bg-black border border-white/10 rounded-3xl p-6 text-xl" placeholder="Escriba el guion empresarial..." />
              <div className="grid grid-cols-4 gap-4">
                {['Fem 1', 'Fem 2', 'Masc 1', 'Masc 2'].map(v => (
                  <button key={v} onClick={()=>setVoice(v)} className={`p-4 rounded-xl font-black text-[10px] border ${voice === v ? 'border-blue-500 bg-blue-500/10' : 'border-white/5'}`}>{v}</button>
                ))}
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase italic text-slate-500">Modulador: Serio/Empresarial - Grave/Expresivo</p>
                <input type="range" className="w-full h-2 bg-blue-900 rounded-lg appearance-none cursor-pointer" />
              </div>
              <button className="w-full py-6 bg-blue-600 rounded-[30px] font-black uppercase text-xl shadow-xl">Reproducir y Exportar</button>
            </div>
          </div>
        )}

        {/* 4. MAILS MASIVOS IA (CONTROL PAULATINO) */}
        {tab === 'mail' && (
          <div className="max-w-4xl space-y-6">
            <h2 className="text-5xl font-black text-red-500 italic uppercase">Massive Mail IA</h2>
            <div className="bg-[#161b22] p-8 rounded-[40px] space-y-6">
              <div className="flex gap-4 bg-black p-4 rounded-2xl border border-dashed border-red-500/20 items-center justify-between">
                <span className="text-[10px] font-black italic">BASE PDF/WORD:</span>
                <input type="file" />
              </div>
              <div className="p-4 bg-red-900/10 border border-red-500/20 rounded-2xl text-[10px] font-bold text-red-400 italic">
                IA DETECTÓ: 1.250 Contactos. Fluidez recomendada: 12 mails/min (Envío paulatino activado).
              </div>
              <textarea className="w-full h-40 bg-black border border-white/10 rounded-3xl p-6 text-lg" placeholder="Cuerpo del mail..." />
              <div className="flex gap-4">
                <button className="flex-1 py-6 bg-slate-800 rounded-3xl font-black uppercase text-xs">Programar Horario IA</button>
                <button className="flex-1 py-6 bg-red-600 rounded-3xl font-black uppercase text-xs">Lanzar Campaña</button>
              </div>
            </div>
          </div>
        )}

        {/* 5. DASHBOARD FINAL (SEGUIMIENTO TOTAL) */}
        {tab === 'dashboard' && (
          <div className="max-w-5xl space-y-8 animate-in slide-in-from-bottom-5 duration-700">
            <h2 className="text-4xl font-black italic uppercase">Genco Analytical Dashboard</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="p-8 bg-[#161b22] rounded-3xl border border-red-500/20 text-center"><p className="text-[10px] text-slate-500 font-bold uppercase">Calientes</p><p className="text-5xl font-black text-red-500">42</p></div>
              <div className="p-8 bg-[#161b22] rounded-3xl border border-orange-500/20 text-center"><p className="text-[10px] text-slate-500 font-bold uppercase">Tibios</p><p className="text-5xl font-black text-orange-500">118</p></div>
              <div className="p-8 bg-[#161b22] rounded-3xl border border-blue-500/20 text-center"><p className="text-[10px] text-slate-500 font-bold uppercase">Respondieron</p><p className="text-5xl font-black text-blue-500">312</p></div>
              <div className="p-8 bg-[#161b22] rounded-3xl border border-emerald-500/20 text-center"><p className="text-[10px] text-slate-500 font-bold uppercase">Faltan</p><p className="text-5xl font-black text-emerald-500">882</p></div>
            </div>
            <div className="bg-[#161b22] rounded-[40px] border border-white/5 overflow-hidden">
              <table className="w-full text-left text-[11px] font-bold italic">
                <thead className="bg-white/5 uppercase text-slate-500 border-b border-white/5"><tr className="border-b border-white/5"><th className="p-8">Lead</th><th>Status</th><th>Analítica IA</th><th>Reporte</th></tr></thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/5 transition-colors"><td className="p-8">Juan Pérez (MZA)</td><td className="text-red-500 uppercase">Caliente</td><td>Interés alto en RAM 1500</td><td><button className="p-2 bg-white/5 rounded-lg text-[8px]">Descargar</button></td></tr>
                  <tr className="hover:bg-white/5 transition-colors"><td className="p-8">Sosa (San Rafael)</td><td className="text-blue-500 uppercase">Frio</td><td>Envió "Ok" - Reintentar en 48hs</td><td><button className="p-2 bg-white/5 rounded-lg text-[8px]">Descargar</button></td></tr>
                </tbody>
              </table>
            </div>
            <div className="flex gap-4">
              <button className="flex-1 py-4 bg-white text-black font-black rounded-2xl uppercase text-[10px]">Informe Semanal PDF</button>
              <button className="flex-1 py-4 bg-slate-800 text-white font-black rounded-2xl uppercase text-[10px]">Cierre Mensual Excel</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
