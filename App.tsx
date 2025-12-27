import React, { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('mensajeria-ia');
  const [status, setStatus] = useState('');
  const [mensajePersonalizado, setMensajePersonalizado] = useState('');
  
  const MI_NUMERO = "549261599995";

  const plantillas = {
    san_rafael: "Hola! 👋 Saludos a toda la gente de San Rafael. Te contacto de JEEMIA para...",
    mendoza: "¡Hola Mendoza! 🍷 Estamos recorriendo la ciudad con nuevas propuestas de...",
    clientes: "Estimado cliente, es un gusto saludarte. Tenemos una actualización para vos..."
  };

  const ejecutarEnvioDirecto = (idLista: string) => {
    const lista = (document.getElementById(idLista) as HTMLTextAreaElement).value;
    const msg = mensajePersonalizado || "Hola, te escribo de JEEMIA PRO";
    
    if(!lista) return alert("Por favor, ingresa los números");
    
    setStatus('🚀 Enviando...');
    const numeros = lista.split(',').map(n => n.trim());
    
    numeros.forEach((num, index) => {
      let limpio = num.replace(/\D/g, '');
      if (!limpio.startsWith('549')) limpio = '549' + limpio;
      
      setTimeout(() => {
        const url = `https://web.whatsapp.com/send?phone=${limpio}&text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
      }, index * 4000); 
    });
  };

  return (
    <div className="flex min-h-screen bg-[#020617] text-white font-sans selection:bg-blue-500/30">
      {/* SIDEBAR PRO */}
      <nav className="w-80 bg-[#0f172a] border-r border-slate-800 p-8 flex flex-col shadow-2xl">
        <div className="mb-10">
          <h1 className="text-4xl font-black text-blue-500 tracking-tighter italic">JEEMIA PRO</h1>
          <p className="text-[10px] text-slate-500 tracking-[0.3em] uppercase mt-1 font-bold">Sales Intelligence Suite</p>
        </div>
        
        <div className="space-y-3 flex-1">
          {[
            {id: 'mensajeria-ia', n: '1. Mensajería Directa', i: '🚀'},
            {id: 'base-datos', n: '2. Base de Datos Pro', i: '📊'},
            {id: 'imagenes', n: '3. Generador de Arte', i: '🎨'},
            {id: 'audios', n: '4. Voz Inteligente (AI)', i: '🎙️'},
            {id: 'analisis', n: '5. Métricas Avanzadas', i: '📈'}
          ].map(item => (
            <button key={item.id} onClick={() => setActiveTab(item.id)}
              className={`w-full text-left p-5 rounded-[24px] transition-all flex items-center gap-4 border ${
                activeTab === item.id ? 'bg-blue-600 border-blue-400 shadow-xl shadow-blue-900/40' : 'bg-transparent border-transparent hover:bg-slate-800 text-slate-400'
              }`}>
              <span className="text-2xl">{item.i}</span>
              <span className="text-sm font-black tracking-tight">{item.n}</span>
            </button>
          ))}
        </div>

        <div className="mt-auto p-5 bg-slate-900/50 rounded-3xl border border-slate-800">
          <p className="text-[10px] text-slate-500 mb-1 font-black tracking-widest uppercase italic">WhatsApp Activo</p>
          <p className="text-blue-400 font-mono text-sm">+{MI_NUMERO}</p>
        </div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-12 overflow-y-auto bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950">
        
        {/* PESTAÑA 1: MENSAJERÍA DIRECTA CON CAMPOS GRANDES */}
        {activeTab === 'mensajeria-ia' && (
          <div className="max-w-5xl space-y-8 animate-in fade-in duration-500">
            <h2 className="text-5xl font-black italic tracking-tighter">Consola de Envío</h2>
            
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-8 space-y-6">
                <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-[40px] border border-slate-800 shadow-inner">
                  <label className="text-xs font-black text-blue-500 uppercase mb-4 block tracking-[0.2em]">📍 1. Destinatarios (Separados por coma)</label>
                  <textarea id="num_masivo" className="w-full h-40 bg-slate-950/50 border border-slate-800 p-6 rounded-3xl text-blue-300 font-mono text-lg focus:border-blue-500 outline-none transition-all" placeholder="2615999995, 261XXXXXXX..." />
                </div>

                <div className="bg-slate-900/80 p-8 rounded-[40px] border border-slate-800">
                  <label className="text-xs font-black text-blue-500 uppercase mb-4 block tracking-[0.2em]">📝 2. Redacción del Mensaje (Campo Amplio)</label>
                  <textarea 
                    value={mensajePersonalizado}
                    onChange={(e) => setMensajePersonalizado(e.target.value)}
                    className="w-full h-72 bg-slate-950/50 border border-slate-800 p-6 rounded-3xl text-slate-200 text-lg focus:border-emerald-500 outline-none transition-all resize-none" 
                    placeholder="Escribe aquí tu propuesta comercial detallada..." 
                  />
                  
                  <div className="mt-6 flex gap-3">
                    <button onClick={() => setMensajePersonalizado(plantillas.san_rafael)} className="px-4 py-2 bg-slate-800 hover:bg-blue-600 rounded-full text-[10px] font-black uppercase tracking-tighter transition-all">📍 San Rafael</button>
                    <button onClick={() => setMensajePersonalizado(plantillas.mendoza)} className="px-4 py-2 bg-slate-800 hover:bg-blue-600 rounded-full text-[10px] font-black uppercase tracking-tighter transition-all">📍 Mendoza</button>
                    <button onClick={() => setMensajePersonalizado(plantillas.clientes)} className="px-4 py-2 bg-slate-800 hover:bg-blue-600 rounded-full text-[10px] font-black uppercase tracking-tighter transition-all">👥 Clientes</button>
                  </div>
                </div>

                <div className="bg-blue-600/5 p-8 rounded-[40px] border-2 border-dashed
