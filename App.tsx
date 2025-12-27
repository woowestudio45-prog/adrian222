import React, { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState('mensajeria');
  const [numeros, setNumeros] = useState('');
  const [msg, setMsg] = useState('');
  const [status, setStatus] = useState('');

  // 1. CARGA DE GUIONES PROFESIONALES GENCO
  const plantillas = {
    sr: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM – Genco Automotores Mendoza.\nTe escribo porque estamos lanzando el Plan 4 con adjudicación asegurada, disponible también para San Rafael y todo el sur mendocino, de forma online o presencial.\n\n👉 Jeep Renegade desde $250.000 + DNI\n👉 También disponibles Compass, Commander, RAM Renegade y la nueva RAM Dakota\n\nEn todos los casos, la unidad se adjudica en la cuota 4, sin sorteos ni licitaciones.\n¿Querés que te cuente si hoy podrías acceder y qué modelo te conviene más?",
    
    mza_base: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM en Genco Automotores Mendoza.\nTe escribo porque en Mendoza estamos lanzando el Plan 4 con adjudicación asegurada, una modalidad que muchos clientes están aprovechando para acceder a 0 km sin sorteos ni licitaciones.\n\n👉 Jeep Renegade desde $250.000 + DNI\n👉 También Compass, Commander, RAM Renegade y la nueva RAM Dakota\n\nLa unidad se adjudica en la cuota 4 en todos los casos.\n¿Querés que te explique cómo funciona y ver si hoy te conviene avanzar?",
    
    post_venta: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM – Genco Automotores Mendoza.\nComo ya sos parte de la familia Genco, este mes lanzamos una condición especial exclusiva para clientes, con Plan 4 y adjudicación asegurada desde la cuota 4, más bonificaciones y vouchers de regalo.\n\nHoy incluso podés ingresar a una Jeep Renegade Sport desde $250.000, y también hay opciones en Compass, Commander y RAM.\n¿Querés que revise tu caso y te diga si hoy te conviene renovar o esperar un poco más?",
    
    capital: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de ventas especiales de Jeep y RAM en Genco Automotores Mendoza.\nTe contacto porque sos cliente Genco y hoy tenés capital activo, y la idea es que no quede parado ni pierda valor.\nJustamente por eso lanzamos una alternativa especial para clientes, que permite reaprovechar ese capital e ingresar en un Plan 4 con adjudicación asegurada desde la cuota 4, sumando bonificaciones y vouchers de regalo.\n\nIncluso hoy se puede ingresar a una Jeep Renegade Sport desde $250.000, sin empezar de cero.\n¿Querés que revise tu situación y te diga cuál es la mejor opción hoy para vos?"
  };

  const ejecutarEnvio = () => {
    if (!numeros || !msg) return alert("⚠️ Ingresa números y un mensaje");
    const lista = numeros.split(',').map(n => n.trim().replace(/\D/g, ''));
    setStatus('🚀 Enviando...');
    lista.forEach((num, i) => {
      let fNum = num.startsWith('549') ? num : '549' + num;
      setTimeout(() => {
        window.open(`https://web.whatsapp.com/send?phone=${fNum}&text=${encodeURIComponent(msg)}`, '_blank');
      }, i * 4000);
    });
  };

  return (
    <div className="flex min-h-screen bg-[#020617] text-white font-sans">
      
      {/* SIDEBAR */}
      <nav className="w-72 bg-[#070e1e] border-r border-white/5 p-6 flex flex-col shadow-2xl">
        <h1 className="text-3xl font-black text-blue-500 italic mb-10 tracking-tighter">JEEMIA PRO</h1>
        <div className="space-y-2">
          <button onClick={() => setTab('mensajeria')} className={`w-full p-4 rounded-2xl text-left text-[10px] font-black tracking-widest ${tab === 'mensajeria' ? 'bg-blue-600' : 'text-slate-500'}`}>🚀 ENVIAR MENSAJES</button>
          <button onClick={() => setTab('ia')} className={`w-full p-4 rounded-2xl text-left text-[10px] font-black tracking-widest ${tab === 'ia' ? 'bg-blue-600' : 'text-slate-500'}`}>🎨 ARTE E IMÁGENES</button>
          <button onClick={() => setTab('voz')} className={`w-full p-4 rounded-2xl text-left text-[10px] font-black tracking-widest ${tab === 'voz' ? 'bg-blue-600' : 'text-slate-500'}`}>🎙️ VOZ INTELIGENTE</button>
          <button onClick={() => setTab('stats')} className={`w-full p-4 rounded-2xl text-left text-[10px] font-black tracking-widest ${tab === 'stats' ? 'bg-blue-600' : 'text-slate-500'}`}>📈 ESTADÍSTICAS</button>
        </div>
      </nav>

      {/* MAIN */}
      <main className="flex-1 p-10 bg-slate-950 overflow-y-auto">
        {tab === 'mensajeria' && (
          <div className="max-w-4xl space-y-6">
            <h2 className="text-4xl font-black italic">Consola Adrián - Genco</h2>
            
            <div className="bg-slate-900 p-8 rounded-[40px] border border-white/5 space-y-6 shadow-2xl">
              <div>
                <label className="text-[10px] font-black text-blue-500 uppercase mb-3 block">1. Números (Separados por coma)</label>
                <textarea 
                  value={numeros} onChange={(e) => setNumeros(e.target.value)}
                  className="w-full h-24 bg-slate-950 border border-white/10 rounded-2xl p-4 text-blue-300 outline-none" 
                  placeholder="2615999995, 2604000000..." 
                />
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <button onClick={() => setMsg(plantillas.sr)} className="px-4 py-2 bg-slate-800 rounded-xl text-[9px] font-bold hover:bg-blue-600 transition-all">SAN RAFAEL</button>
                  <button onClick={() => setMsg(plantillas.mza_base)} className="px-4 py-2 bg-slate-800 rounded-xl text-[9px] font-bold hover:bg-blue-600 transition-all">MZA BASE</button>
                  <button onClick={() => setMsg(plantillas.post_venta)} className="px-4 py-2 bg-slate-800 rounded-xl text-[9px] font-bold hover:bg-blue-600 transition-all">POST VENTA</button>
                  <button onClick={() => setMsg(plantillas.capital)} className="px-4 py-2 bg-slate-800 rounded-xl text-[9px] font-bold hover:bg-blue-600 transition-all">MZA CAPITAL</button>
                </div>
                <label className="text-[10px] font-black text-emerald-500 uppercase mb-3 block">2. Mensaje Gigante</label>
                <textarea 
                  value={msg} onChange={(e) => setMsg(e.target.value)}
                  className="w-full h-80 bg-slate-950 border border-white/10 rounded-[30px] p-6 text-white text-lg outline-none" 
                  placeholder="Selecciona un botón arriba..." 
                />
              </div>

              <button onClick={ejecutarEnvio} className="w-full py-8 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-[35px] text-3xl shadow-2xl transition-all uppercase italic">
                ENVIAR AHORA
              </button>
              {status && <p className="text-center text-emerald-400 font-bold">{status}</p>}
            </div>
          </div>
        )}

        {/* MÓDULOS IA (VISTA PREVIA) */}
        {(tab === 'ia' || tab === 'voz') && (
          <div className="text-center py-20 bg-slate-900 rounded-[50px] border border-dashed border-white/10">
            <h3 className="text-2xl font-black mb-4">Módulo de Generación Activo</h3>
            <p className="text-slate-500 italic">Conectando con Nano Banana y Google AI Studio...</p>
            <div className="mt-8 flex justify-center gap-4">
                <div className="w-20 h-20 bg-blue-600 rounded-full animate-ping"></div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
