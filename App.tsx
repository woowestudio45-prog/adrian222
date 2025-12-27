import React, { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState('mensajeria');
  const [numeros, setNumeros] = useState('');
  const [msg, setMsg] = useState('');
  const [status, setStatus] = useState('');
  const [promptIA, setPromptIA] = useState('');
  const [ratio, setRatio] = useState('1:1');
  const [voz, setVoz] = useState('Fem 1');

  // BIBLIOTECA DE GUIONES PROFESIONALES GENCO AUTOMOTORES
  const plantillas = {
    sr: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM – Genco Automotores Mendoza.\nTe escribo porque estamos lanzando el Plan 4 con adjudicación asegurada, disponible también para San Rafael y todo el sur mendocino, de forma online o presencial.\n\n👉 Jeep Renegade desde $250.000 + DNI\n👉 También disponibles Compass, Commander, RAM Renegade y la nueva RAM Dakota\n\nEn todos los casos, la unidad se adjudica en la cuota 4, sin sorteos ni licitaciones.\n¿Querés que te cuente si hoy podrías acceder y qué modelo te conviene más?",
    
    mza_base: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM en Genco Automotores Mendoza.\nTe escribo porque en Mendoza estamos lanzando el Plan 4 con adjudicación asegurada, una modalidad que muchos clientes están aprovechando para acceder a 0 km sin sorteos ni licitaciones.\n\n👉 Jeep Renegade desde $250.000 + DNI\n👉 También Compass, Commander, RAM Renegade y la nueva RAM Dakota\n\nLa unidad se adjudica en la cuota 4 en todos los casos.\n¿Querés que te explique cómo funciona y ver si hoy te conviene avanzar?",
    
    post_venta: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM – Genco Automotores Mendoza.\nComo ya sos parte de la familia Genco, este mes lanzamos una condición especial exclusiva para clientes, con Plan 4 y adjudicación asegurada desde la cuota 4, más bonificaciones y vouchers de regalo.\n\nHoy incluso podés ingresar a una Jeep Renegade Sport desde $250.000, y también hay opciones en Compass, Commander y RAM.\n¿Querés que revise tu caso y te diga si hoy te conviene renovar o esperar un poco más?",
    
    capital: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de ventas especiales de Jeep y RAM en Genco Automotores Mendoza.\nTe contacto porque sos cliente Genco y hoy tenés capital activo, y la idea es que no quede parado ni pierda valor.\nJustamente por eso lanzamos una alternativa especial para clientes, que permite reaprovechar ese capital e ingresar en un Plan 4 con adjudicación asegurada desde la cuota 4, sumando bonificaciones y vouchers de regalo.\n\nIncluso hoy se puede ingresar a una Jeep Renegade Sport desde $250.000, sin empezar de cero.\n¿Querés que revise tu situación y te diga cuál es la mejor opción hoy para vos?"
  };

  const ejecutarEnvio = () => {
    if (!numeros || !msg) {
      alert("⚠️ Por favor ingresa números y selecciona un guion");
      return;
    }
    const lista = numeros.split(',').map(n => n.trim().replace(/\D/g, ''));
    setStatus('🚀 Lanzando campaña Genco...');
    
    lista.forEach((num, i) => {
      let limpio = num;
      if (!limpio.startsWith('549')) limpio = '549' + limpio;
      
      setTimeout(() => {
        const url = `https://web.whatsapp.com/send?phone=${limpio}&text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
        if (i === lista.length - 1) setStatus('✅ Campaña enviada correctamente');
      }, i * 4500); // 4.5 segundos para evitar bloqueos de WhatsApp
    });
  };

  return (
    <div className="flex min-h-screen bg-[#020617] text-white font-sans selection:bg-blue-500/30">
      
      {/* SIDEBAR ELITE */}
      <nav className="w-80 bg-[#070e1e] border-r border-white/5 p-8 flex flex-col shadow-2xl">
        <div className="mb-12">
          <h1 className="text-4xl font-black text-blue-500 tracking-tighter italic">JEEMIA PRO</h1>
          <p className="text-[10px] text-slate-500 tracking-[0.3em] uppercase mt-1 font-bold italic">Genco Automotores</p>
        </div>
        
        <div className="space-y-3 flex-1">
          {[
            {id: 'mensajeria', n: 'CONSOLA DE ENVÍO', i: '🚀'},
            {id: 'masivo', n: 'MASIVO + MODERADOR', i: '📊'},
            {id: 'arte', n: 'NANO BANANA PRO', i: '🎨'},
            {id: 'voz', n: 'GOOGLE AI STUDIO', i: '🎙️'},
            {id: 'analisis', n: 'DASHBOARD ÉLITE', i: '📈'}
          ].map(item => (
            <button key={item.id} onClick={() => setTab(item.id)}
              className={`w-full text-left p-5 rounded-[28px] transition-all flex items-center gap-4 border ${
                tab === item.id ? 'bg-blue-600 border-blue-400 shadow-xl text-white' : 'hover:bg-white/5 border-transparent text-slate-500'
              }`}>
              <span className="text-2xl">{item.i}</span>
              <span className="text-xs font-black tracking-widest">{item.n}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-12 overflow-y-auto bg-slate-950">
        
        {tab === 'mensajeria' && (
          <div className="max-w-5xl space-y-8 animate-in fade-in duration-500">
            <h2 className="text-5xl font-black italic tracking-tighter text-white">Consola Comercial Adrián</h2>
            
            <div className="bg-[#0f172a] p-10 rounded-[50px] border border-white/5 shadow-2xl space-y-8">
              {/* CAMPO DE NÚMEROS */}
              <div className="bg-slate-950/50 p-6 rounded-[35px] border border-white/5">
                <label className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-4 block italic">1. Destinatarios (Separados por coma)</label>
                <textarea 
                  value={numeros} onChange={(e) => setNumeros(e.target.value)}
                  className="w-full h-24 bg-transparent text-blue-300 font-mono text-lg outline-none" 
                  placeholder="Ej: 2615999995, 2604XXXXXX..." 
                />
              </div>

              {/* CAMPO DE MENSAJE GIGANTE */}
              <div className="bg-slate-950/50 p-8 rounded-[35px] border border-white/5">
                <div className="flex flex-wrap gap-2 mb-6">
                    <button onClick={() => setMsg(plantillas.sr)} className="px-5 py-3 bg-slate-800 hover:bg-blue-600 rounded-2xl text-[10px] font-black uppercase transition-all border border-white/5">📍 San Rafael</button>
                    <button onClick={() =>
