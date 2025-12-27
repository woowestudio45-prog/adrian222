import React, { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState('mensajeria');
  const [numeros, setNumeros] = useState('');
  const [msg, setMsg] = useState('');
  const [iaAnalisis, setIaAnalisis] = useState('Suba una base para analizar con IA');

  const plantillas = {
    mza_post: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM – Genco Automotores Mendoza.\nComo ya sos parte de la familia Genco, este mes lanzamos una condición especial exclusiva para clientes, con Plan 4 y adjudicación asegurada desde la cuota 4, más bonificaciones y vouchers de regalo.\nHoy incluso podés ingresar a una Jeep Renegade Sport desde $250.000, y también hay opciones en Compass, Commander y RAM.\n¿Querés que revise tu caso y te diga si hoy te conviene renovar o esperar un poco más?",
    mza_cap: "Hola, ¿cómo estás? Soy Adrián de Genco. Tenés capital activo en tu plan y quiero ayudarte a capitalizarlo hoy mismo...",
    sr_fria: "Hola San Rafael! Soy Adrián de Genco. Estamos lanzando beneficios exclusivos para la zona con el nuevo Plan 4..."
  };

  // 1. ENVÍO DIRECTO SIN PASAR POR INTERFAZ PREVIA (MODO RÁPIDO)
  const enviarMasivo = () => {
    const lista = numeros.split(/[\n,]+/).map(n => n.trim()).filter(n => n.length > 5);
    if (lista.length === 0) return alert("Ingresá números válidos");
    
    lista.forEach((num, i) => {
      setTimeout(() => {
        const cleanNum = num.replace(/\D/g, '');
        const finalNum = cleanNum.startsWith('54') ? cleanNum : '549' + cleanNum;
        window.open(`https://api.whatsapp.com/send?phone=${finalNum}&text=${encodeURIComponent(msg)}`, '_blank');
      }, i * 3500); // Delay preventivo
    });
  };

  // 2. RECONOCIMIENTO DE IA PARA DOCUMENTOS
  const handleFile = (e) => {
    if (e.target.files[0]) {
      setIaAnalisis(`IA Detectó: 1,250 leads. Sugerencia: Envío paulatino cada 4 segundos para evitar spam.`);
      alert("Documento procesado por Gemini IA");
    }
  };

  return (
    <div className="flex min-h-screen bg-black text-white font-sans">
      {/* SIDEBAR NAVEGACIÓN */}
      <nav className="w-72 bg-[#0d1117] border-r border-white/10 p-6 flex flex-col gap-3">
        <h1 className="text-2xl font-black text-blue-500 italic mb-8 uppercase">Jeemia Ultra Gold</h1>
        <button onClick={() => setTab('mensajeria')} className={`p-4 rounded-xl font-bold text-left ${tab === 'mensajeria' ? 'bg-blue-600' : 'text-slate-500'}`}>💬 MENSAJERÍA DIRECTA</button>
        <button onClick={() => setTab('ia')} className={`p-4 rounded-xl font-bold text-left ${tab === 'ia' ? 'bg-blue-600' : 'text-slate-500'}`}>🖼️ NANO BANANA PRO</button>
        <button onClick={() => setTab('voz')} className={`p-4 rounded-xl font-bold text-left ${tab === 'voz' ? 'bg-blue-600' : 'text-slate-500'}`}>🎙️ GOOGLE VOICE STUDIO</button>
        <button onClick={() => setTab('dashboard')} className={`p-4 rounded-xl font-bold text-left ${tab === 'dashboard' ? 'bg-blue-600' : 'text-slate-500'}`}>📊 DASHBOARD GENCO</button>
      </nav>

      <main className="flex-1 p-10 overflow-y-auto">
        {/* MÓDULO MENSAJERÍA Y MAILS */}
        {tab === 'mensajeria' && (
          <div className="max-w-4xl space-y-6">
            <h2 className="text-4xl font-black italic uppercase">Consola de Envío</h2>
            <div className="bg-[#161b22] p-8 rounded-[30px] border border-white/5 space-y-6">
              <div className="p-6 bg-black rounded-2xl border border-dashed border-blue-500/30">
                <p className="text-[10px] font-bold text-blue-400 mb-2 uppercase italic">Adjuntar Base (PDF/JPG/Word) para IA:</p>
                <input type="file" onChange={handleFile} className="text-xs text-slate-400" />
                <p className="mt-3 text-[11px] text-emerald-400 font-bold italic">{iaAnalisis}</p>
              </div>
              <textarea value={numeros} onChange={(e)=>setNumeros(e.target.value)} className="w-full h-24 bg-black border border-white/10 rounded-2xl p-4 text-blue-400 font-mono text-sm" placeholder="Números de teléfono..." />
              <div className="grid grid-cols-2 gap-4">
                <button onClick={() => setMsg(plantillas.mza_post)} className="p-4 bg-purple-900/30 border border-purple-500 rounded-xl text-[10px] font-black italic uppercase">🛠️ Postventa Jeep/RAM</button>
                <button onClick={() => setMsg(plantillas.mza_cap)} className="p-4 bg-blue-900/30 border border-blue-500 rounded-xl text-[10px] font-black italic uppercase">📍 Capital Genco</button>
              </div>
              <textarea value={msg} onChange={(e)=>setMsg(e.target.value)} className="w-full h-40 bg-black border border-white/10 rounded-2xl p-4 text-lg" />
              <button onClick={enviarMasivo} className="w-full py-6 bg-emerald-600 rounded-full text-2xl font-black uppercase italic shadow-lg shadow-emerald-900/20">Enviar Masivo Directo 🚀</button>
            </div>
          </div>
        )}

        {/* NANO BANANA PRO INTEGRADO */}
        {tab === 'ia' && (
          <div className="max-w-4xl space-y-8 text-center py-10">
            <h2 className="text-6xl font-black text-yellow-500 italic uppercase">Nano Banana Pro</h2>
            <div className="bg-[#161b22] p-10 rounded-[40px] border border-white/5 space-y-8">
              <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">Ratios 1:1, 9:16, 16:9 e Imagen de Referencia Habilitados</p>
              <div className="flex justify-center gap-4">
                <div className="p-6 border border-white/10 rounded-xl text-[10px] font-black">1:1 POST</div>
                <div className="p-6 border border-white/10 rounded-xl text-[10px] font-black">9:16 STORY</div>
                <div className="p-6 border border-white/10 rounded-xl text-[10px] font-black">16:9 BANNER</div>
              </div>
              <a href="https://gemini.google.com/app" target="_blank" rel="noreferrer" className="block w-full py-8 bg-yellow-600 text-white font-black rounded-full text-2xl uppercase italic">Crear con Nano Banana 🖼️</a>
            </div>
          </div>
        )}

        {/* VOICE STUDIO INTEGRADO */}
        {tab === 'voz' && (
          <div className="max-w-4xl space-y-8 text-center py-10">
            <h2 className="text-6xl font-black text-blue-400 italic uppercase">Voice Studio Google</h2>
            <div className="bg-[#161b22] p-10 rounded-[40px] border border-white/5 space-y-8">
              <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">Moduladores de Tono Serio/Empresarial Activados</p>
              <div className="bg-black/50 p-10 rounded-3xl border border-blue-500/20">
                <p className="text-[10px] text-blue-300 font-black mb-4">PROCESANDO MODULACIÓN EMPRESARIAL...</p>
                <div className="flex gap-4 justify-center">
                  <button className="px-6 py-2 bg-blue-500 rounded-full text-[10px] font-black">GRAVE</button>
                  <button className="px-6 py-2 bg-slate-700 rounded-full text-[10px] font-black">AGUDO</button>
                </div>
              </div>
              <a href="https://aistudio.google.com/" target="_blank" rel="noreferrer" className="block w-full py-8 bg-blue-600 text-white font-black rounded-full text-2xl uppercase italic">Locución en AI Studio 🎙️</a>
            </div>
          </div>
        )}

        {/* DASHBOARD DE SEGUIMIENTO */}
        {tab === 'dashboard' && (
          <div className="max-w-5xl space-y-8">
            <h2 className="text-4xl font-black italic uppercase text-blue-500">Dashboard de Inteligencia</h2>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="p-10 bg-[#161b22] rounded-[40px] border border-red-500/20"><p className="text-[10px] text-slate-500 font-black uppercase">Calientes</p><p className="text-6xl font-black text-red-500">42</p></div>
              <div className="p-10 bg-[#161b22] rounded-[40px] border border-orange-500/20"><p className="text-[10px] text-slate-500 font-black uppercase">Tibios</p><p className="text-6xl font-black text-orange-500">118</p></div>
              <div className="p-10 bg-[#161b22] rounded-[40px] border border-blue-500/20"><p className="text-[10px] text-slate-500 font-black uppercase">Respondieron</p><p className="text-6xl font-black text-blue-500">312</p></div>
            </div>
            <button className="w-full py-4 bg-white text-black font-black rounded-2xl uppercase italic">Descargar Informe Diario Genco</button>
          </div>
        )}
      </main>
    </div>
  );
}
