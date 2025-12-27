import React, { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState('mensajeria');
  const [numeros, setNumeros] = useState('');
  const [msg, setMsg] = useState('');
  const [status, setStatus] = useState('');
  const [archivo, setArchivo] = useState<File | null>(null);

  // GUIONES PROFESIONALES GENCO ACTUALIZADOS
  const plantillas = {
    sr: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM – Genco Automotores Mendoza.\nTe escribo porque estamos lanzando el Plan 4 con adjudicación asegurada, disponible también para San Rafael y todo el sur mendocino.\n\n👉 Jeep Renegade desde $250.000 + DNI\n👉 También Compass, Commander, RAM Renegade y la nueva RAM Dakota.\n\nLa unidad se adjudica en la cuota 4, sin sorteos ni licitaciones.\n¿Querés que te cuente si hoy podrías acceder?",
    
    mza_base: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM en Genco Automotores Mendoza.\nTe escribo porque estamos lanzando el Plan 4 con adjudicación asegurada para acceder a tu 0 km sin sorteos ni licitaciones.\n\n👉 Jeep Renegade desde $250.000 + DNI\n👉 También Compass, Commander, RAM Renegade y la nueva RAM Dakota.\n\n¿Querés que te explique cómo funciona y ver si hoy te conviene avanzar?",
    
    post_venta: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM – Genco Automotores Mendoza.\nComo ya sos parte de la familia Genco, lanzamos una condición especial para clientes: Plan 4 con adjudicación asegurada + bonificaciones y vouchers de regalo.\n\nPodés renovar por una Jeep Renegade Sport desde $250.000.\n¿Querés que revise tu caso y te diga si te conviene renovar ahora?",
    
    capital: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de ventas especiales en Genco Mendoza.\nTe contacto porque tenés capital activo en Genco y la idea es que no pierda valor. Lanzamos un Plan 4 con adjudicación asegurada desde la cuota 4.\n\nPodés ingresar a una Jeep Renegade Sport desde $250.000 sin empezar de cero.\n¿Querés que revise cuál es la mejor opción para aprovechar tu capital?"
  };

  const ejecutarEnvio = () => {
    if (!numeros || !msg) return alert("⚠️ Ingresa números y selecciona un guion");
    const lista = numeros.split(',').map(n => n.trim().replace(/\D/g, ''));
    setStatus(`🚀 Procesando ${lista.length} envíos...`);
    
    lista.forEach((num, i) => {
      // Formateo automático para Argentina
      let fNum = num;
      if (!fNum.startsWith('54')) fNum = '549' + fNum;
      
      setTimeout(() => {
        // Enlace directo optimizado
        const url = `https://api.whatsapp.com/send?phone=${fNum}&text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
        
        if (i === lista.length - 1) setStatus('✅ Ciclo completado. ¡Recordá adjuntar el archivo manualmente en cada chat!');
      }, i * 3500); // 3.5 segundos de intervalo
    });
  };

  return (
    <div className="flex min-h-screen bg-[#020617] text-white font-sans selection:bg-blue-500/30">
      
      {/* SIDEBAR ELITE */}
      <nav className="w-72 bg-[#070e1e] border-r border-white/5 p-8 flex flex-col shadow-2xl">
        <h1 className="text-3xl font-black text-blue-500 italic mb-10 tracking-tighter">JEEMIA PRO</h1>
        <div className="space-y-3 flex-1">
          <button onClick={() => setTab('mensajeria')} className={`w-full p-4 rounded-2xl text-left text-[10px] font-black tracking-widest transition-all ${tab === 'mensajeria' ? 'bg-blue-600 shadow-lg shadow-blue-900/40' : 'text-slate-500 hover:bg-white/5'}`}>🚀 ENVIAR MENSAJES</button>
          <button onClick={() => setTab('ia')} className={`w-full p-4 rounded-2xl text-left text-[10px] font-black tracking-widest ${tab === 'ia' ? 'bg-blue-600' : 'text-slate-500'}`}>🎨 ARTE E IMÁGENES</button>
          <button onClick={() => setTab('voz')} className={`w-full p-4 rounded-2xl text-left text-[10px] font-black tracking-widest ${tab === 'voz' ? 'bg-blue-600' : 'text-slate-500'}`}>🎙️ VOZ INTELIGENTE</button>
          <button onClick={() => setTab('stats')} className={`w-full p-4 rounded-2xl text-left text-[10px] font-black tracking-widest ${tab === 'stats' ? 'bg-blue-600' : 'text-slate-500'}`}>📈 ESTADÍSTICAS</button>
        </div>
        <div className="p-4 bg-slate-900/50 rounded-2xl border border-white/5">
          <p className="text-[9px] text-blue-400 font-black uppercase text-center">Genco Mendoza</p>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10 bg-slate-950 overflow-y-auto">
        {tab === 'mensajeria' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl font-black italic tracking-tighter">Consola de Ventas Adrián</h2>
            
            <div className="bg-slate-900/50 p-8 rounded-[40px] border border-white/5 space-y-6 shadow-2xl backdrop-blur-sm">
              
              {/* 1. NÚMEROS */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-blue-500 uppercase tracking-widest ml-2">1. Lista de Números</label>
                <textarea 
                  value={numeros} onChange={(e) => setNumeros(e.target.value)}
                  className="w-full h-24 bg-slate-950 border border-white/10 rounded-3xl p-5 text-blue-300 font-mono outline-none focus:border-blue-500/50 transition-all" 
                  placeholder="Ej: 2604105595, 2615999995..." 
                />
              </div>

              {/* 2. MENSAJE + BOTONES */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => setMsg(plantillas.sr)} className="px-4 py-2 bg-slate-800 rounded-xl text-[9px] font-black hover:bg-blue-600 transition-all border border-white/5">📍 SAN RAFAEL</button>
                  <button onClick={() => setMsg(plantillas.mza_base)} className="px-4 py-2 bg-slate-800 rounded-xl text-[9px] font-black hover:bg-blue-600 transition-all border border-white/5">🍷 MZA BASE</button>
                  <button onClick={() => setMsg(plantillas.post_venta)} className="px-4 py-2 bg-slate-800 rounded-xl text-[9px] font-black hover:bg-blue-600 transition-all border border-white/5">👤 POST VENTA</button>
                  <button onClick={() => setMsg(plantillas.capital)} className="px-4 py-2 bg-slate-800 rounded-xl text-[9px] font-black hover:bg-blue-600 transition-all border border-white/5">💰 MZA CAPITAL</button>
                </div>
                <label className="text-[10px] font-black text-emerald-500 uppercase tracking-widest ml-2 block">2. Redacción del Mensaje</label>
                <textarea 
                  value={msg} onChange={(e) => setMsg(e.target.value)}
                  className="w-full h-80 bg-slate-950 border border-white/10 rounded-[35px] p-6 text-white text-lg outline-none leading-relaxed resize-none focus:border-emerald-500/50 transition-all" 
                  placeholder="Selecciona un guion para empezar..." 
                />
              </div>

              {/* 3. ADJUNTOS (NUEVO CAMPO) */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-purple-500 uppercase tracking-widest ml-2">3. Adjuntar Catálogo o PDF</label>
                <div className="relative group">
                  <input 
                    type="file" 
                    onChange={(e) => setArchivo(e.target.files ? e.target.files[0] : null)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="w-full p-6 bg-slate-950 border-2 border-dashed border-slate-800 rounded-3xl flex items-center justify-between group-hover:border-purple-500/50 transition-all">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{archivo ? '📄' : '📁'}</span>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">
                        {archivo ? archivo.name : 'Seleccionar PDF o Imagen para la campaña'}
                      </span>
                    </div>
                    <span className="text-[10px] font-black bg-purple-600 px-3 py-1 rounded-full">EXAMINAR</span>
                  </div>
                </div>
              </div>

              {/* BOTÓN LANZAR */}
              <button onClick={ejecutarEnvio} className="w-full py-8 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-[40px] text-4xl shadow-2xl shadow-emerald-900/20 transition-all active:scale-95 uppercase italic tracking-tighter">
                INICIAR ENVÍO
              </button>
              
              {status && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                  <p className="text-center text-emerald-400 font-bold text-sm animate-pulse italic uppercase">{
