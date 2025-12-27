import React, { useState, useEffect } from 'react';

export default function App() {
  const [tab, setTab] = useState('mensajeria');
  const [numeros, setNumeros] = useState('');
  const [msg, setMsg] = useState('');
  const [promptIA, setPromptIA] = useState('');
  const [vozTexto, setVozTexto] = useState('');
  const [stats, setStats] = useState({ enviados: 0, calientes: 0, tibios: 0 });

  // 1. WHATSAPP DIRECTO & TEXTOS PREDETERMINADOS
  const plantillas = {
    mza: "Hola! Soy Adrián de Genco Mendoza. Plan 4 Jeep/RAM: Entrega asegurada cuota 4. ¿Te interesa?",
    sr: "Hola! Soy Adrián de Genco San Rafael. Adjudicación cuota 4 sin sorteo. ¿Hablamos?",
    capital: "Adrián de Genco aquí. Tenemos una opción para proteger tu capital con Plan 4. ¿Consultamos?"
  };

  const enviarDirecto = () => {
    const lista = numeros.split(',').map(n => n.trim().replace(/\D/g, ''));
    lista.forEach((num, i) => {
      const fNum = num.startsWith('54') ? num : '549' + num;
      // Delay dinámico por IA para evitar bloqueos
      setTimeout(() => {
        window.open(`https://web.whatsapp.com/send?phone=${fNum}&text=${encodeURIComponent(msg)}`, '_blank');
      }, i * 8500); 
    });
  };

  return (
    <div className="flex min-h-screen bg-[#010409] text-white font-sans selection:bg-blue-500/30">
      
      {/* SIDEBAR DE COMANDO */}
      <nav className="w-80 bg-[#0d1117] border-r border-white/10 p-8 flex flex-col gap-3 shadow-2xl">
        <h1 className="text-3xl font-black text-blue-500 italic mb-10 tracking-tighter">JEEMIA ULTRA</h1>
        {[
          { id: 'mensajeria', icon: '💬', label: 'Mensajería Directa' },
          { id: 'ia', icon: '🖼️', label: 'Nano Banana Pro' },
          { id: 'voz', icon: '🎙️', label: 'Google Voice Studio' },
          { id: 'mails', icon: '📧', label: 'Mails Masivos IA' },
          { id: 'dashboard', icon: '📊', label: 'Dashboard Genco' }
        ].map(item => (
          <button 
            key={item.id}
            onClick={() => setTab(item.id)}
            className={`flex items-center gap-4 p-5 rounded-2xl font-bold transition-all ${tab === item.id ? 'bg-blue-600 shadow-lg' : 'text-slate-500 hover:bg-white/5'}`}
          >
            <span className="text-xl">{item.icon}</span> 
            <span className="text-[10px] uppercase tracking-[0.2em]">{item.label}</span>
          </button>
        ))}
        <div className="mt-auto p-4 bg-blue-500/5 border border-blue-500/10 rounded-2xl text-[9px] text-blue-400 font-bold text-center italic">
          SESIÓN: acouto@gencosa.com.ar
        </div>
      </nav>

      <main className="flex-1 p-12 bg-[#010409] overflow-y-auto">
        
        {/* MÓDULO 1: MENSAJERÍA DIRECTA */}
        {tab === 'mensajeria' && (
          <div className="max-w-5xl space-y-8 animate-in fade-in duration-500">
            <h2 className="text-5xl font-black italic uppercase">Consola de Texto</h2>
            <div className="bg-[#161b22] p-10 rounded-[40px] border border-white/5 space-y-8 shadow-2xl">
              <div className="space-y-4">
                <label className="text-[10px] font-black text-blue-500 uppercase tracking-widest ml-4">Base de Datos</label>
                <textarea value={numeros} onChange={(e) => setNumeros(e.target.value)} className="w-full h-24 bg-[#010409] border border-white/10 rounded-3xl p-6 text-blue-400 font-mono text-lg" placeholder="2604..., 2615..." />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <button onClick={() => setMsg(plantillas.mza)} className="p-4 bg-purple-600 hover:bg-purple-500 rounded-2xl text-[9px] font-black uppercase italic transition-all">Mendoza</button>
                <button onClick={() => setMsg(plantillas.sr)} className="p-4 bg-orange-600 hover:bg-orange-500 rounded-2xl text-[9px] font-black uppercase italic transition-all">San Rafael</button>
                <button onClick
