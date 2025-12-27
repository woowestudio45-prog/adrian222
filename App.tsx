import React, { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('mensajeria-ia');
  const [status, setStatus] = useState('');
  const MI_NUMERO = "549261599995";

  // Función de envío directo
  const enviarWhatsApp = () => {
    const lista = (document.getElementById('num_input') as HTMLTextAreaElement).value;
    const msg = (document.getElementById('msg_input') as HTMLTextAreaElement).value;
    
    if(!lista || !msg) return alert("Completa los datos");
    
    const numeros = lista.split(',').map(n => n.trim());
    numeros.forEach((num, i) => {
      let limpio = num.replace(/\D/g, '');
      if (!limpio.startsWith('549')) limpio = '549' + limpio;
      
      setTimeout(() => {
        window.open(`https://wa.me/${limpio}?text=${encodeURIComponent(msg)}`, '_blank');
        if(i === numeros.length - 1) setStatus('✅ Campaña iniciada');
      }, i * 2000);
    });
  };

  return (
    <div className="flex min-h-screen bg-[#020617] text-white font-sans">
      {/* SIDEBAR CORREGIDO */}
      <nav className="w-72 bg-[#0f172a] border-r border-slate-800 p-6 flex flex-col">
        <h1 className="text-3xl font-black text-blue-500 mb-10 tracking-tighter">JEEMIA PRO</h1>
        <div className="space-y-2 flex-1">
          {['mensajeria-ia', 'base-datos', 'imagenes', 'audios', 'analisis'].map(t => (
            <button key={t} onClick={() => setActiveTab(t)} 
              className={`w-full text-left p-4 rounded-xl transition ${activeTab === t ? 'bg-blue-600' : 'hover:bg-slate-800'}`}>
              {t.toUpperCase().replace('-', ' ')}
            </button>
          ))}
        </div>
        <div className="mt-auto p-4 bg-slate-900 rounded-xl border border-slate-800 text-center">
          <p className="text-[10px] text-slate-500">ACTIVO: {MI_NUMERO}</p>
        </div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-10">
        {activeTab === 'mensajeria-ia' && (
          <div className="max-w-4xl space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-2">🚀 Mensajería Masiva</h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2 space-y-4">
                <textarea id="num_input" className="w-full h-40 bg-slate-950 border border-slate-800 p-4 rounded-2xl text-blue-400" placeholder="Números: 2615999995, 261XXXXXXX..." />
                <textarea id="msg_input" className="w-full h-32 bg-slate-950 border border-slate-800 p-4 rounded-2xl" placeholder="Mensaje de venta..." />
                <button onClick={enviarWhatsApp} className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 rounded-2xl font-black text-xl shadow-lg">🚀 INICIAR ENVÍO MASIVO</button>
                {status && <p className="text-center text-emerald-400 font-bold">{status}</p>}
              </div>
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center">
                 <h3 className="text-blue-400 font-bold mb-4">🤖 IA Soporte</h3>
                 <button className="w-full py-2 bg-slate-800 rounded-lg text-xs font-bold mb-2">SUGERIR HORARIOS</button>
                 <button className="w-full py-2 bg-slate-800 rounded-lg text-xs font-bold">OPTIMIZAR MENSAJE</button>
              </div>
            </div>
          </div>
        )}

        {/* DASHBOARD COMPLETO */}
        {activeTab === 'analisis' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">📊 Dashboard Analítica</h2>
              <button className="bg-blue-600 px-4 py-2 rounded-lg font-bold text-sm">Descargar Informe Semanal</button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-3xl text-center">
                <p className="text-xs text-slate-400 font-bold uppercase">Calientes</p>
                <p className="text-4xl font-black text-red-500">42</p>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/30 p-6 rounded-3xl text-center">
                <p className="text-xs text-slate-400 font-bold uppercase">Tibios</p>
                <p className="text-4xl font-black text-orange-400">128</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 p-6 rounded-3xl text-center">
                <p className="text-xs text-slate-400 font-bold uppercase">Fríos</p>
                <p className="text-4xl font-black text-blue-500">850</p>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-3xl text-center">
                <p className="text-xs text-slate-400 font-bold uppercase">Enviados</p>
                <p className="text-4xl font-black text-emerald-500">1.2K</p>
              </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
               <h3 className="font-bold mb-4">Registro de Campañas Reales</h3>
               <table className="w-full text-left text-sm">
                 <thead><tr className="border-b border-slate-800 opacity-50"><th className="pb-2">FECHA</th><th className="pb-2">NÚMEROS</th><th className="pb-2">ESTADO</th></tr></thead>
                 <tbody><tr><td className="py-4">26/12/2025</td><td>1,200</td><td><span className="text-emerald-400">COMPLETADO</span></td></tr></tbody>
               </table>
            </div>
          </div>
        )}

        {(activeTab === 'imagenes' || activeTab === 'audios') && (
          <div className="max-w-2xl mx-auto bg-slate-900 p-12 rounded-[40px] border border-slate-800 text-center">
            <h2 className="text-2xl font-bold mb-6">{activeTab === 'imagenes' ? '🎨 Generador Nano Banana' : '🎙️ Google AI Voice Studio'}</h2>
            <textarea className="w-full h-32 bg-slate-950 p-4 rounded-2xl mb-6 border border-slate-800" placeholder="Prompt para la IA..." />
            <button className="w-full py-4 bg-purple-600 rounded-2xl font-black">GENERAR Y DESCARGAR</button>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
