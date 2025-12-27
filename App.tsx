import React, { useState, useEffect } from 'react';

export default function App() {
  const [tab, setTab] = useState('mensajeria');
  const [numeros, setNumeros] = useState('');
  const [msg, setMsg] = useState('');
  const [archivo, setArchivo] = useState('');
  const [stats, setStats] = useState({ total: 0, tiempo: '0 min', riesgo: 'Bajo' });

  const plantillas = {
    sr: "Hola! Soy Adrián de Genco Jeep/RAM. Plan 4 San Rafael: Adjudicación asegurada cuota 4. Renegade desde $250.000 + DNI. ¿Te interesa?",
    mza: "Hola! Soy Adrián de Genco Mendoza. Lanzamos Plan 4: Jeep y RAM con entrega asegurada cuota 4. ¿Querés info?",
    clientes: "Hola! Soy Adrián de Genco. Por ser cliente tenés bonificación especial en Plan 4 con entrega en cuota 4. ¿Hablamos?"
  };

  // ANALISIS DE BASE DE DATOS EN TIEMPO REAL
  useEffect(() => {
    const total = numeros.split(',').filter(n => n.trim() !== '').length;
    setStats({
      total: total,
      tiempo: `${total * 6} seg`,
      riesgo: total > 40 ? 'Medio (Usar intervalos)' : 'Bajo'
    });
  }, [numeros]);

  const enviarFluido = () => {
    const lista = numeros.split(',').map(n => n.trim().replace(/\D/g, ''));
    alert(`Iniciando envío para ${lista.length} clientes. Reporte a: acouto@gencosa.com.ar`);
    
    lista.forEach((num, i) => {
      const fNum = num.startsWith('54') ? num : '549' + num;
      setTimeout(() => {
        // LINK DIRECTO PARA EVITAR PANTALLA INTERMEDIA
        window.open(`https://web.whatsapp.com/send?phone=${fNum}&text=${encodeURIComponent(msg)}`, '_blank');
      }, i * 6000); // 6 segundos entre mensajes para fluidez Genco
    });
  };

  return (
    <div className="flex min-h-screen bg-[#020617] text-white font-sans">
      <nav className="w-80 bg-[#070e1e] border-r border-white/5 p-8 flex flex-col gap-4 shadow-2xl">
        <h1 className="text-3xl font-black text-blue-500 italic mb-10 tracking-tighter">JEEMIA PRO</h1>
        <button onClick={() => setTab('mensajeria')} className={`p-4 rounded-xl text-left font-bold ${tab === 'mensajeria' ? 'bg-blue-600' : 'text-slate-500 hover:bg-white/5'}`}>🚀 ENVIAR MENSAJES</button>
        <button onClick={() => setTab('base')} className={`p-4 rounded-xl text-left font-bold ${tab === 'base' ? 'bg-blue-600' : 'text-slate-500 hover:bg-white/5'}`}>📊 BASE DE DATOS PRO</button>
        <button onClick={() => setTab('ia')} className={`p-4 rounded-xl text-left font-bold ${tab === 'ia' ? 'bg-blue-600' : 'text-slate-500 hover:bg-white/5'}`}>🎨 NANO BANANA PRO</button>
        <button onClick={() => setTab('voz')} className={`p-4 rounded-xl text-left font-bold ${tab === 'voz' ? 'bg-blue-600' : 'text-slate-500 hover:bg-white/5'}`}>🎙️ VOZ INTELIGENTE</button>
        <div className="mt-auto p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-[10px] text-blue-400 font-bold text-center italic">ASESOR: ADRIÁN GENCO</div>
      </nav>

      <main className="flex-1 p-12 bg-slate-950 overflow-y-auto">
        {tab === 'mensajeria' && (
          <div className="max-w-4xl space-y-6">
            <h2 className="text-4xl font-black italic uppercase">Consola de Envío</h2>
            <div className="bg-slate-900/50 p-8 rounded-[40px] border border-white/5 space-y-6 shadow-2xl">
              <textarea value={numeros} onChange={(e) => setNumeros(e.target.value)} className="w-full h-24 bg-slate-950 border border-white/10 rounded-2xl p-4 text-blue-300 font-mono" placeholder="2604105595, 2615999995..." />
              <div className="grid grid-cols-3 gap-2">
                <button onClick={() => setMsg(plantillas.sr)} className="p-3 bg-orange-600 rounded-xl text-[10px] font-bold uppercase italic">San Rafael</button>
                <button onClick={() => setMsg(plantillas.mza)} className="p-3 bg-purple-600 rounded-xl text-[10px] font-bold uppercase italic">Mendoza</button>
                <button onClick={() => setMsg(plantillas.clientes)} className="p-3 bg-blue-600 rounded-xl text-[10px] font-bold uppercase italic">Clientes Genco</button>
              </div>
              <textarea value={msg} onChange={(e) => setMsg(e.target.value)} className="w-full h-64 bg-slate-950 border border-white/10 rounded-3xl p-6 text-white text-lg" />
              <button onClick={enviarFluido} className="w-full py-6 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-[30px] text-3xl shadow-2xl transition-all uppercase italic">INICIAR ENVÍO SOLO</button>
            </div>
          </div>
        )}

        {tab === 'base' && (
          <div className="max-w-4xl space-y-8">
            <h2 className="text-4xl font-black italic uppercase">Análisis Base Pro</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-6 bg-slate-900 rounded-3xl border border-blue-500/30 text-center"><p className="text-[10px] text-slate-500 font-bold uppercase">Clientes</p><p className="text-4xl font-black text-blue-500">{stats.total}</p></div>
              <div className="p-6 bg-slate-900 rounded-3xl border border-emerald-500/30 text-center"><p className="text-[10px] text-slate-500 font-bold uppercase">Tiempo</p><p className="text-4xl font-black text-emerald-500">{stats.tiempo}</p></div>
              <div className="p-6 bg-slate-900 rounded-3xl border border-orange-500/30 text-center"><p className="text-[10px] text-slate-500 font-bold uppercase">Riesgo</p><p className="text-xl font-black text-orange-500">{stats.riesgo}</p></div>
            </div>
            <div className="p-6 bg-blue-500/5 border border-blue-500/10 rounded-3xl text-xs text-slate-400">
              🚀 Reportes de Leads Activos configurados para: **acouto@gencosa.com.ar**
            </div>
          </div>
        )}

        {tab === 'ia' && <div className="text-center py-20"><h2 className="text-6xl font-black text-yellow-500 italic mb-4">NANO BANANA PRO</h2><p className="text-slate-500">Generando artes con Gemini AI para Genco...</p></div>}
      </main>
    </div>
  );
}
