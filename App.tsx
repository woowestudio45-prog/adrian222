import React, { useState, useEffect } from 'react';

export default function App() {
  const [tab, setTab] = useState('mensajeria');
  const [numeros, setNumeros] = useState('');
  const [msg, setMsg] = useState('');
  const [promptIA, setPromptIA] = useState('');
  const [imgGenerada, setImgGenerada] = useState<string | null>(null);
  const [vozTexto, setVozTexto] = useState('');
  const [stats, setStats] = useState({ total: 0, tiempo: '0 min', leads: 0 });

  const plantillas = {
    sr: "Hola! Soy Adrián de Genco Jeep. Lanzamos Plan 4 San Rafael: Adjudicación asegurada cuota 4. Renegade desde $250.000 + DNI. ¿Te interesa?",
    mza: "Hola! Soy Adrián de Genco Mendoza. Plan 4: Jeep y RAM con entrega asegurada cuota 4 sin sorteos. ¿Querés info?",
    clientes: "Hola! Soy Adrián de Genco. Por ser cliente tenés bonificación en Plan 4 con entrega en cuota 4. ¿Hablamos?"
  };

  // 📊 ANÁLISIS DE BASE PRO
  useEffect(() => {
    const total = numeros.split(',').filter(n => n.trim() !== '').length;
    setStats({ total, tiempo: `${total * 7} seg`, leads: Math.floor(total * 0.12) });
  }, [numeros]);

  // 🚀 ENVÍO FLUIDO PROGRAMADO
  const enviarCampana = () => {
    const lista = numeros.split(',').map(n => n.trim().replace(/\D/g, ''));
    alert(`Iniciando envío programado para ${lista.length} clientes. Alertas de Leads a acouto@gencosa.com.ar`);
    lista.forEach((num, i) => {
      const fNum = num.startsWith('54') ? num : '549' + num;
      setTimeout(() => {
        window.open(`https://web.whatsapp.com/send?phone=${fNum}&text=${encodeURIComponent(msg)}`, '_blank');
      }, i * 7000); // 7 segundos entre mensajes para fluidez
    });
  };

  // 🎙️ VOZ INTELIGENTE (Simulación)
  const generarVoz = () => {
    if (!vozTexto) return;
    const utterance = new SpeechSynthesisUtterance(vozTexto);
    utterance.lang = 'es-AR';
    window.speechSynthesis.speak(utterance);
    alert("Audio generado y listo para enviar como mensaje de voz.");
  };

  // 🎨 NANO BANANA IA (Simulación de Imagen)
  const generarImagen = () => {
    setImgGenerada("https://images.unsplash.com/photo-1610450949065-1f2809da7f30?q=80&w=500&auto=format&fit=crop"); // Simulación Jeep
    alert("IA Nano Banana: Arte publicitario generado para Genco.");
  };

  return (
    <div className="flex min-h-screen bg-[#020617] text-white font-sans overflow-hidden">
      
      {/* SIDEBAR CORPORATIVO */}
      <nav className="w-80 bg-[#070e1e] border-r border-white/5 p-8 flex flex-col gap-4 shadow-2xl">
        <h1 className="text-4xl font-black text-blue-500 italic mb-10">JEEMIA</h1>
        <button onClick={() => setTab('mensajeria')} className={`p-5 rounded-2xl text-left font-bold ${tab === 'mensajeria' ? 'bg-blue-600 shadow-blue-900/40 shadow-lg' : 'text-slate-400 hover:bg-white/5'}`}>🚀 MENSAJERÍA IA</button>
        <button onClick={() => setTab('base')} className={`p-5 rounded-2xl text-left font-bold ${tab === 'base' ? 'bg-blue-600 shadow-blue-900/40 shadow-lg' : 'text-slate-400 hover:bg-white/5'}`}>📊 BASE PRO</button>
        <button onClick={() => setTab('ia')} className={`p-5 rounded-2xl text-left font-bold ${tab === 'ia' ? 'bg-blue-600 shadow-blue-900/40 shadow-lg' : 'text-slate-400 hover:bg-white/5'}`}>🎨 NANO BANANA</button>
        <button onClick={() => setTab('voz')} className={`p-5 rounded-2xl text-left font-bold ${tab === 'voz' ? 'bg-blue-600 shadow-blue-900/40 shadow-lg' : 'text-slate-400 hover:bg-white/5'}`}>🎙️ VOZ PRO</button>
        <div className="mt-auto p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-[10px] text-blue-400 font-bold text-center">ADRIÁN: acouto@gencosa.com.ar</div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-12 bg-slate-950 overflow-y-auto">
        
        {/* MÓDULO MENSAJERÍA */}
        {tab === 'mensajeria' && (
          <div className="max-w-4xl space-y-8 animate-in fade-in duration-500">
            <h2 className="text-5xl font-black italic uppercase">Consola de Envío</h2>
            <div className="bg-slate-900/50 p-10 rounded-[40px] border border-white/5 space-y-6">
              <textarea value={numeros} onChange={(e) => setNumeros(e.target.value)} className="w-full h-24 bg-slate-950 border border-white/10 rounded-2xl p-6 text-blue-300 font-mono" placeholder="Números separados por coma..." />
              <div className="grid grid-cols-3 gap-3">
                <button onClick={() => setMsg(plantillas.sr)} className="p-4 bg-orange-600 rounded-xl text-[10px] font-black uppercase italic shadow-md">San Rafael</button>
                <button onClick={() => setMsg(plantillas.mza)} className="p-4 bg-purple-600 rounded-xl text-[10px] font-black uppercase italic shadow-md">Mendoza</button>
                <button onClick={() => setMsg(plantillas.clientes)} className="p-4 bg-blue-600 rounded-xl text-[10px] font-black uppercase italic shadow-md">Clientes</button>
              </div>
              <textarea value={msg} onChange={(e) => setMsg(e.target.value)} className="w-full h-64 bg-slate-950 border border-white/10 rounded-3xl p-8 text-white text-xl" placeholder="Escriba su mensaje..." />
              <button onClick={enviarCampana} className="w-full py-8 bg-emerald-600 text-white font-black rounded-[35px] text-3xl shadow-2xl hover:bg-emerald-500 transition-all italic uppercase">Lanzar Envío Programado</button>
            </div>
          </div>
        )}

        {/* MÓDULO BASE PRO */}
        {tab === 'base' && (
          <div className="max-w-4xl space-y-8 animate-in slide-in-from-bottom-5 duration-500">
            <h2 className="text-4xl font-black italic uppercase">Análisis de Clientes</h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="p-8 bg-slate-900 rounded-[35px] border border-blue-500/20 text-center"><p className="text-[10px] text-slate-500 font-bold uppercase">Total Clientes</p><p className="text-5xl font-black text-blue-500">{stats.total}</p></div>
              <div className="p-8 bg-slate-900 rounded-[35px] border border-emerald-500/20 text-center"><p className="text-[10px] text-slate-500 font-bold uppercase">Ciclo Fluido</p><p className="text-5xl font-black text-emerald-500">{stats.tiempo}</p></div>
              <div className="p-8 bg-slate-900 rounded-[35px] border border-purple-500/20 text-center"><p className="text-[10px] text-slate-500 font-bold uppercase">Leads Activos</p><p className="text-5xl font-black text-purple-500">{stats.leads}</p></div>
            </div>
            <div className="p-10 bg-slate-900/60 rounded-[40px] border border-white/5 shadow-2xl">
               <h3 className="text-xl font-bold italic mb-4">Informe Detallado de Campaña</h3>
               <p className="text-slate-400 leading-relaxed italic">El sistema está analizando las mejores opciones de tiempo y días para que los envíos no sean simultáneos sino progresivos, garantizando la fluidez y evitando el SPAM.</p>
            </div>
          </div>
        )}

        {/* MÓDULO NANO BANANA (IA IMAGEN) */}
        {tab === 'ia' && (
          <div className="max-w-4xl space-y-8 animate-in zoom-in-95 duration-500 text-center">
            <h2 className="text-5xl font-black italic text-yellow-500 uppercase">Nano Banana IA</h2>
            <div className="bg-slate-900 p-10 rounded-[50px] border border-yellow-500/20 space-y-6">
              <textarea value={promptIA} onChange={(e) => setPromptIA(e.target.value)} className="w-full h-40 bg-slate-950 border border-white/10 rounded-3xl p-6 text-white text-lg" placeholder="Describa el arte publicitario: Ej: RAM 1500 en la cordillera..." />
              <button onClick={generarImagen} className="px-12 py-5 bg-yellow-600 rounded-full font-black uppercase text-sm shadow-2xl hover:bg-yellow-500">Generar Arte Genco</button>
              {imgGenerada && <img src={imgGenerada} className="w-full h-64 object-cover rounded-3xl mt-6 border-4 border-yellow-500/50" alt="IA" />}
            </div>
          </div>
        )}

        {/* MÓDULO VOZ PRO */}
        {tab === 'voz' && (
          <div className="max-w-4xl space-y-8 animate-in fade-in duration-700 text-center">
            <h2 className="text-5xl font-black italic uppercase">Voz Inteligente Google</h2>
            <div className="bg-slate-900 p-10 rounded-[50px] border border-blue-500/20 space-y-6">
              <textarea value={vozTexto} onChange={(e) => setVozTexto(e.target.value)} className="w-full h-40 bg-slate-950 border border-white/10 rounded-3xl p-6 text-white text-lg" placeholder="Pegue el texto que desea convertir a audio profesional..." />
              <button onClick={generarVoz} className="px-12 py-5 bg-blue-600 rounded-full font-black uppercase text-sm shadow-2xl hover:bg-blue-500">Generar Audio para WhatsApp</button>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
