import React, { useState, useEffect } from 'react';

export default function App() {
  const [tab, setTab] = useState('mensajeria');
  const [numeros, setNumeros] = useState('');
  const [msg, setMsg] = useState('');
  const [imgRef, setImgRef] = useState<string | null>(null);
  const [vozConfig, setVozConfig] = useState({ voz: 'es-AR-1', tono: 1, velocidad: 1 });
  const [mailBase, setMailBase] = useState<any>(null);

  // 1. CHAT & WHATSAPP DIRECTO (Sin Confirmación)
  const enviarDirecto = () => {
    const lista = numeros.split(',').map(n => n.trim().replace(/\D/g, ''));
    lista.forEach((num, i) => {
      const fNum = num.startsWith('54') ? num : '549' + num;
      // Usamos el protocolo directo para intentar saltar la pantalla de espera
      setTimeout(() => {
        window.open(`https://web.whatsapp.com/send?phone=${fNum}&text=${encodeURIComponent(msg)}`, '_blank');
      }, i * 8000); // Fluidez definida por IA para Genco
    });
  };

  return (
    <div className="flex min-h-screen bg-[#010409] text-white font-sans overflow-hidden">
      
      {/* SIDEBAR DE CONTROL TOTAL */}
      <nav className="w-80 bg-[#0d1117] border-r border-white/10 p-8 flex flex-col gap-2">
        <h1 className="text-3xl font-black text-blue-500 italic mb-10 tracking-tighter">JEEMIA ULTRA</h1>
        {[
          { id: 'mensajeria', icon: '💬', label: 'Mensajería Directa' },
          { id: 'ia', icon: '🖼️', label: 'Nano Banana Pro' },
          { id: 'voz', icon: '🎙️', label: 'Google Voice Studio' },
          { id: 'mails', icon: '📧', label: 'Mails Masivos IA' },
          { id: 'stats', icon: '📈', label: 'Dashboard Genco' }
        ].map(item => (
          <button 
            key={item.id}
            onClick={() => setTab(item.id)}
            className={`flex items-center gap-4 p-4 rounded-xl font-bold transition-all ${tab === item.id ? 'bg-blue-600 shadow-lg' : 'text-slate-500 hover:bg-white/5'}`}
          >
            <span>{item.icon}</span> <span className="text-[11px] uppercase tracking-widest">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* MAIN CONSOLE */}
      <main className="flex-1 p-10 bg-[#010409] overflow-y-auto">
        
        {/* 1. MENSAJERÍA DIRECTA CON ADJUNTOS */}
        {tab === 'mensajeria' && (
          <div className="max-w-5xl space-y-6">
            <h2 className="text-4xl font-black italic uppercase">Consola de Texto Directo</h2>
            <div className="bg-[#161b22] p-8 rounded-[30px] border border-white/10 space-y-6">
              <textarea value={numeros} onChange={(e) => setNumeros(e.target.value)} className="w-full h-24 bg-[#010409] border border-white/10 rounded-2xl p-4 text-blue-400 font-mono" placeholder="Base de números..." />
              <div className="flex gap-4">
                <input type="file" className="text-xs bg-slate-900 p-4 rounded-xl flex-1 border border-dashed border-slate-700" />
                <button className="bg-slate-800 px-6 rounded-xl font-bold text-xs uppercase">Adjuntar PDF/JPG</button>
              </div>
              <textarea value={msg} onChange={(e) => setMsg(e.target.value)} className="w-full h-48 bg-[#010409] border border-white/10 rounded-2xl p-6 text-xl" placeholder="Texto del mensaje..." />
              <button onClick={enviarDirecto} className="w-full py-6 bg-emerald-600 hover:bg-emerald-500 rounded-2xl text-2xl font-black uppercase italic shadow-xl">Enviar a WhatsApp Directo</button>
            </div>
          </div>
        )}

        {/* 2. NANO BANANA PRO (IMAGEN COMPLETA) */}
        {tab === 'ia' && (
          <div className="max-w-5xl space-y-6">
            <h2 className="text-4xl font-black italic text-yellow-500 uppercase">Nano Banana Pro Unlimited</h2>
            <div className="bg-[#161b22] p-8 rounded-[30px] border border-yellow-500/20 grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <textarea className="w-full h-40 bg-[#010409] border border-white/10 rounded-2xl p-4" placeholder="Prompt avanzado para Gemini..." />
                <div className="grid grid-cols-3 gap-2">
                  <button className="p-3 bg-slate-800 rounded-lg text-[9px] font-bold">1:1 Square</button>
                  <button className="p-3 bg-slate-800 rounded-lg text-[9px] font-bold">16:9 Cinema</button>
                  <button className="p-3 bg-slate-800 rounded-lg text-[9px] font-bold">9:16 Story</button>
                </div>
                <div className="p-4 bg-slate-950 border border-dashed border-slate-700 rounded-xl text-center">
                  <p className="text-[10px] text-slate-500 uppercase">Subir Imagen de Referencia</p>
                </div>
                <button className="w-full py-4 bg-yellow-600 rounded-xl font-black uppercase">Generar e Previsualizar</button>
              </div>
              <div className="bg-[#010409] rounded-3xl border border-white/5 flex flex-col items-center justify-center relative overflow-hidden">
                <span className="text-slate-800 font-black text-6xl italic">PREVIEW</span>
                <button className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full shadow-xl">⬇️ Descargar</button>
              </div>
            </div>
          </div>
        )}

        {/* 3. GOOGLE VOICE STUDIO */}
        {tab === 'voz' && (
          <div className="max-w-5xl space-y-6">
            <h2 className="text-4xl font-black italic text-blue-400 uppercase">Google AI Voice Studio</h2>
            <div className="bg-[#161b22] p-8 rounded-[30px] border border-blue-500/20 space-y-6">
              <textarea className="w-full h-32 bg-[#010409] border border-white/10 rounded-2xl p-4" placeholder="Texto para locución..." />
              <div className="grid grid-cols-4 gap-4">
                <button className="p-4 bg-blue-900/30 border border-blue-500/50 rounded-xl text-[10px] font-bold">👩 Elena (Femenina)</button>
                <button className="p-4 bg-slate-800 rounded-xl text-[10px] font-bold">👩 Sofía (Femenina)</button>
                <button className="p-4 bg-slate-800 rounded-xl text-[10px] font-bold">👨 Carlos (Masculino)</button>
                <button className="p-4 bg-slate-800 rounded-xl text-[10px] font-bold">👨 Diego (Masculino)</button>
              </div>
              <div className="grid grid-cols-2 gap-8 p-6 bg-slate-950 rounded-2xl">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-slate-500">Modulador (Grave a Agudo)</label>
                  <input type="range" className="w-full accent-blue-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-slate-500">Expresividad (Serio a Activo)</label>
                  <input type="range" className="w-full accent-blue-500" />
                </div>
              </div>
              <button className="w-full py-5 bg-blue-600 rounded-2xl font-black uppercase shadow-lg">Reproducir y Masterizar Audio</button>
            </div>
          </div>
        )}

        {/* 4. DASHBOARD FINAL GENCO */}
        {tab === 'stats' && (
          <div className="max-w-5xl space-y-6">
            <div className="flex justify-between items-end">
              <h2 className="text-4xl font-black italic uppercase">Reporte General Genco</h2>
              <button className="px-6 py-2 bg-white text-black font-black text-[10px] rounded-full uppercase">Descargar Informe Semanal</button>
            </div>
            <div className="grid grid-cols-4 gap-4">
               {[
                 { label: 'Enviados', val: '1,240', color: 'text-blue-500' },
                 { label: 'Leads Calientes', val: '42', color: 'text-red-500' },
                 { label: 'Leads Tibios', val: '156', color: 'text-orange-500' },
                 { label: 'Leads Fríos', val: '1,042', color: 'text-slate-500' }
               ].map(s => (
                 <div className="bg-[#161b22] p-8 rounded-[30px] border border-white/5 text-center">
                   <p className="text-[9px] font-black uppercase text-slate-500 mb-2">{s.label}</p>
                   <p className={`text-4xl font-black ${s.color}`}>{s.val}</p>
                 </div>
               ))}
            </div>
            <div className="bg-[#161b22] rounded-[30px] border border-white/5 overflow-hidden">
               <table className="w-full text-left text-xs">
                 <thead className="bg-white/5 uppercase font-black text-slate-500"><tr className="border-b border-white/10"><th className="p-6">Cliente</th><th>Estado</th><th>Respuesta</th><th>Acción</th></tr></thead>
                 <tbody className="italic font-bold">
                   <tr className="border-b border-white/5">
                     <td className="p-6">Juan Pérez (San Rafael)</td>
                     <td><span className="text-red-500">CALIENTE</span></td>
                     <td>"Me interesa la RAM, ¿donde firmo?"</td>
                     <td><button className="text-blue-500 underline">Llamar Ahora</button></td>
                   </tr>
                 </tbody>
               </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
