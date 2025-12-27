import React, { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState('mensajeria');
  const [numeros, setNumeros] = useState('');
  const [msg, setMsg] = useState('');

  // 1. TUS TEXTOS LITERALES Y PROTEGIDOS
  const plantillas = {
    mza_cap: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de ventas especiales de Jeep y RAM en Genco Automotores Mendoza.\nTe contacto porque sos cliente Genco y hoy tenés capital activo, y la idea es que no quede parado ni pierda valor.\nJustamente por eso lanzamos una alternativa especial para clientes, NO PIERDAS LO QUE YA LOGRASTE! Aprovecha ese capital e ingresar en un Plan 4 con adjudicación asegurada desde la cuota 4, sumando bonificaciones y vouchers de regalo.\nIncluso hoy se puede ingresar a una Jeep Renegade Sport desde $250.000, sin empezar de cero.\n¿Querés que revise tu situación y te diga cuál es la mejor opción hoy para vos?",
    
    mza_post: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM – Genco Automotores Mendoza.\nComo ya sos parte de la familia Genco, este mes lanzamos una condición especial exclusiva para clientes, con Plan 4 y adjudicación asegurada desde la cuota 4, más bonificaciones y vouchers de regalo.\nHoy incluso podés ingresar a una Jeep Renegade Sport desde $250.000, y también hay opciones en Compass, Commander y RAM.\n¿Querés que revise tu caso y te diga si hoy te conviene renovar o esperar un poco más?",
    
    mza_fria: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM en Genco Automotores Mendoza.\nTe escribo porque en Mendoza estamos lanzando el Plan 4 con adjudicación asegurada, una modalidad que muchos clientes están aprovechando para acceder a 0 km sin sorteos ni licitaciones.\n👉 Jeep Renegade desde $250.000 + DNI\n\n👉 También Compass, Commander, RAM Renegade y la nueva RAM Dakota\nLa unidad se adjudica en la cuota 4 en todos los casos.\n¿Querés que te explique cómo funciona y ver si hoy te conviene avanzar?",
    
    sr_fria: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM – Genco Automotores Mendoza.\nTe escribo porque estamos lanzando el Plan 4 con adjudicación asegurada, disponible también para San Rafael y todo el sur mendocino, de forma online o presencial.\n👉 Jeep Renegade desde $250.000 + DNI\n\n👉 También disponibles Compass, Commander, RAM Renegade y la nueva RAM Dakota\nEn todos los casos, la unidad se adjudica en la cuota 4, sin sorteos ni licitaciones.\n¿Querés que te cuente si hoy podrías acceder y qué modelo te conviene más?"
  };

  const enviarWA = (tel, t) => {
    const fNum = tel.replace(/\D/g, '').startsWith('54') ? tel : '549' + tel;
    window.open(`https://web.whatsapp.com/send?phone=${fNum}&text=${encodeURIComponent(t || msg)}`, '_blank');
  };

  const enviarMasivo = () => {
    const lista = numeros.split(',').map(n => n.trim());
    lista.forEach((num, i) => setTimeout(() => enviarWA(num, msg), i * 8500));
  };

  return (
    <div className="flex min-h-screen bg-[#010409] text-white font-sans selection:bg-blue-500/30">
      
      {/* SIDEBAR */}
      <nav className="w-80 bg-[#0d1117] border-r border-white/10 p-8 flex flex-col gap-3 shadow-2xl">
        <h1 className="text-3xl font-black text-blue-500 italic mb-10 tracking-tighter">JEEMIA ULTRA</h1>
        <button onClick={() => setTab('mensajeria')} className={`p-5 rounded-2xl font-bold text-left transition-all ${tab === 'mensajeria' ? 'bg-blue-600 shadow-lg' : 'text-slate-500 hover:bg-white/5'}`}>💬 MENSAJERÍA DIRECTA</button>
        <button onClick={() => setTab('ia')} className={`p-5 rounded-2xl font-bold text-left transition-all ${tab === 'ia' ? 'bg-blue-600 shadow-lg' : 'text-slate-500 hover:bg-white/5'}`}>🖼️ NANO BANANA PRO</button>
        <button onClick={() => setTab('voz')} className={`p-5 rounded-2xl font-bold text-left transition-all ${tab === 'voz' ? 'bg-blue-600 shadow-lg' : 'text-slate-500 hover:bg-white/5'}`}>🎙️ VOICE STUDIO</button>
        <button onClick={() => setTab('dashboard')} className={`p-5 rounded-2xl font-bold text-left transition-all ${tab === 'dashboard' ? 'bg-blue-600 shadow-lg' : 'text-slate-500 hover:bg-white/5'}`}>📊 DASHBOARD GENCO</button>
      </nav>

      <main className="flex-1 p-12 overflow-y-auto bg-[#010409]">
        
        {/* MENSAJERÍA CON BOTONES RESTAURADOS */}
        {tab === 'mensajeria' && (
          <div className="max-w-5xl space-y-8 animate-in fade-in duration-500">
            <h2 className="text-5xl font-black italic uppercase italic">Consola de Envío</h2>
            <div className="bg-[#161b22] p-10 rounded-[40px] border border-white/5 space-y-8 shadow-2xl">
              <textarea value={numeros} onChange={(e) => setNumeros(e.target.value)} className="w-full h-24 bg-black border border-white/10 rounded-3xl p-6 text-blue-400 font-mono text-lg" placeholder="261..., 260..." />
              
              <div className="grid grid-cols-2 gap-4">
                <button onClick={() => setMsg(plantillas.mza_cap)} className="p-4 bg-blue-900/40 border border-blue-500/50 rounded-2xl text-[10px] font-black uppercase italic hover:scale-105 transition-all">📍 MZA Capital Clientes</button>
                <button onClick={() => setMsg(plantillas.mza_post)} className="p-4 bg-purple-900/40 border border-purple-500/50 rounded-2xl text-[10px] font-black uppercase italic hover:scale-105 transition-all">🛠️ MZA Postventa</button>
                <button onClick={() => setMsg(plantillas.mza_fria)} className="p-4 bg-orange-900/40 border border-orange-500/50 rounded-2xl text-[10px] font-black uppercase italic hover:scale-105 transition-all">❄️ MZA Base Fría</button>
                <button onClick={() => setMsg(plantillas.sr_fria)} className="p-4 bg-emerald-900/40 border border-emerald-500/50 rounded-2xl text-[10px] font-black uppercase italic hover:scale-105 transition-all">📍 San Rafael Fría</button>
              </div>

              <textarea value={msg} onChange={(e) => setMsg(e.target.value)} className="w-full h-64 bg-black border border-white/10 rounded-[40px] p-8 text-white text-xl leading-relaxed" placeholder="Mensaje..." />
              <button onClick={enviarMasivo} className="w-full py-8 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-[40px] text-4xl shadow-2xl transition-all uppercase italic">Lanzar Envío Directo</button>
            </div>
          </div>
        )}

        {/* NANO BANANA PRO */}
        {tab === 'ia' && (
          <div className="max-w-5xl space-y-12 animate-in zoom-in-95 duration-500 text-center">
            <h2 className="text-6xl font-black text-yellow-500 italic uppercase">Nano Banana Pro</h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.3em]">Control de Ratios e Imagen de Referencia Activado.</p>
            <div className="grid grid-cols-3 gap-6 mt-12">
              <button className="p-12 bg-[#161b22] border border-white/5 rounded-[30px] font-black italic text-slate-500 hover:border-yellow-500/50 transition-all uppercase">1:1 Post</button>
              <button className="p-12 bg-[#161b22] border border-white/5 rounded-[30px] font-black italic text-slate-500 hover:border-yellow-500/50 transition-all uppercase">9:16 Story</button>
              <button className="p-12 bg-[#161b22] border border-white/5 rounded-[30px] font-black italic text-slate-500 hover:border-yellow-500/50 transition-all uppercase">16:9 Banner</button>
            </div>
          </div>
        )}

        {/* VOICE STUDIO */}
        {tab === 'voz' && (
          <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-700 text-center">
            <h2 className="text-6xl font-black text-blue-400 italic uppercase tracking-tighter">Voice Studio Google</h2>
            <div className="p-12 bg-[#161b22] rounded-[50px] border border-blue-500/20 space-y-8">
              <div className="h-4 w-full bg-blue-900/30 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-blue-500 animate-pulse"></div>
              </div>
              <p className="text-xs font-black text-blue-400 uppercase italic tracking-widest">Procesando Modulación Empresarial...</p>
              <div className="flex gap-4 justify-center">
                 <button className="px-8 py-4 bg-blue-600 rounded-full font-black text-[10px] uppercase italic">Grave</button>
                 <button className="px-8 py-4 bg-slate-800 rounded-full font-black text-[10px] uppercase italic">Agudo</button>
              </div>
            </div>
          </div>
        )}

        {/* DASHBOARD CON CIERRE DIRECTO */}
        {tab === 'dashboard' && (
          <div className="max-w-5xl space-y-8 animate-in slide-in-from-bottom-10 duration-500">
            <h2 className="text-4xl font-black italic uppercase">Dashboard Genco Pro</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="p-10 bg-[#161b22] rounded-[40px] border border-red-500/20 text-center"><p className="text-[10px] text-slate-500 font-bold uppercase mb-2">Calientes</p><p className="text-6xl font-black text-red-500">42</p></div>
              <div className="p-10 bg-[#161b22] rounded-[40px] border border-blue-500/20 text-center"><p className="text-[10px] text-slate-500 font-bold uppercase mb-2">Total Mes</p><p className="text-6xl font-black text-blue-500">1.240</p></div>
              <div className="p-10 bg-[#161b22] rounded-[40px] border border-emerald-500/20 text-center"><p className="text-[10px] text-slate-500 font-bold uppercase mb-2">Ventas</p><p className="text-6xl font-black text-emerald-500">18</p></div>
              <div className="p-10 bg-[#161b22] rounded-[40px] border border-white/5 text-center"><p className="text-[10px] text-slate-500 font-bold uppercase mb-2">Conversión</p><p className="text-6xl font-black text-white">4.2%</p></div>
            </div>
            <div className="bg-[#161b22] rounded-[40px] border border-white/5 overflow-hidden">
              <table className="w-full text-left text-xs italic font-bold">
                <thead className="bg-white/5 uppercase text-slate-500"><tr className="border-b border-white/5"><th className="p-8">Lead</th><th>Respuesta</th><th>Acción</th></tr></thead>
                <tbody>
                  <tr className="border-b border-white/5 group hover:bg-white/5">
                    <td className="p-8 text-blue-400 underline">Juan Manuel (260455...)</td>
                    <td className="text-emerald-400">"¿Toman usados para la RAM?"</td>
                    <td><button onClick={() => enviarWA('5492604555555', 'Hola! Soy Adrián de Genco. Te contacto por tu interés en la RAM, ¡tengo una propuesta excelente para tu usado!')} className="px-6 py-3 bg-red-600 hover:bg-red-500 rounded-full font-black uppercase text-[9px] shadow-lg">🔥 CERRAR VENTA</button></td>
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
