import React, { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState('mensajeria');
  const [numeros, setNumeros] = useState('');
  const [msg, setMsg] = useState('');

  // 1. TUS TEXTOS LITERALES - PROTEGIDOS
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
        <h1 className="text-3xl font-black text-blue-500 italic mb-10 tracking-tighter uppercase">Jeemia Ultra</h1>
        <button onClick={() => setTab('mensajeria')} className={`p-5 rounded-2xl font-bold text-left transition-all ${tab === 'mensajeria' ? 'bg-blue-600 shadow-lg' : 'text-slate-500 hover:bg-white/5'}`}>💬 Mensajería Directa</button>
        <button onClick={() => setTab('ia')} className={`p-5 rounded-2xl font-bold text-left transition-all ${tab === 'ia' ? 'bg-blue-600 shadow-lg' : 'text-slate-500 hover:bg-white/5'}`}>🖼️ Nano Banana Pro</button>
        <button onClick={() => setTab('voz')} className={`p-5 rounded-2xl font-bold text-left transition-all ${tab === 'voz' ? 'bg-blue-600 shadow-lg' : 'text-slate-500 hover:bg-white/5'}`}>🎙️ Voice Studio</button>
        <button onClick={() => setTab('dashboard')} className={`p-5 rounded-2xl font-bold text-left transition-all ${tab === 'dashboard' ? 'bg-blue-600 shadow-lg' : 'text-slate-500 hover:bg-white/5'}`}>📊 Dashboard Genco</button>
      </nav>

      <main className="flex-1 p-12 overflow-y-auto">
        
        {/* MÓDULO 1: MENSAJERÍA (TEXTOS RECUPERADOS) */}
        {tab === 'mensajeria' && (
          <div className="max-w-5xl space-y-8">
            <h2 className="text-5xl font-black italic uppercase">Consola de Envío</h2>
            <div className="bg-[#161b22] p-10 rounded-[40px] border border-white/5 space-y-8 shadow-2xl">
              <textarea value={numeros} onChange={(e) => setNumeros(e.target.value)} className="w-full h-24 bg-black border border-white/10 rounded-3xl p-6 text-blue-400 font-mono text-lg" placeholder="Base de números (con coma)..." />
              
              <div className="grid grid-cols-2 gap-4">
                <button onClick={() => setMsg(plantillas.mza_cap)}
