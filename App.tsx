import React, { useState } from 'react';
import { geminiService } from './services/geminiService';

const App = () => {
  const [activeTab, setActiveTab] = useState('mensajeria-ia');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  
  const MI_NUMERO = "549261599995"; // Tu número de WhatsApp Business

  // 1. FUNCIÓN DE ENVÍO PROFESIONAL (WhatsApp Web / Desktop)
  const ejecutarEnvio = (lista, mensaje) => {
    if(!lista || !mensaje) return alert("Por favor, carga números y el mensaje");
    setStatus('🚀 Procesando campaña masiva...');
    
    const numeros = lista.split(',').map(n => n.trim());
    numeros.forEach((num, index) => {
      let limpio = num.replace(/\D/g, '');
      if (!limpio.startsWith('549')) limpio = '549' + limpio;
      
      // Apertura controlada para evitar bloqueos
      setTimeout(() => {
        const url = `https://wa.me/${limpio}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
        if(index === numeros.length - 1) setStatus('✅ Campaña enviada correctamente');
      }, index * 2000); 
    });
  };

  // 2. CONEXIÓN CON IA (Gemini 1.5 Flash para Horarios y Contenido)
  const llamarIA = async (tipo) => {
    setLoading(true);
    try {
      const prompt = tipo === 'estrategia' 
        ? "Sugiere los mejores horarios de envío masivo para Mendoza, Argentina y frecuencia para evitar baneos."
        : "Mejora este mensaje de venta para que sea irresistible y profesional.";
      const res = await geminiService.analizarEstrategiaEnvio("Módulo Masivos", prompt);
      setAiResponse(res);
    } catch (e) {
      setAiResponse("⚠️ Error: Revisa la API KEY en las Variables de Entorno de Vercel.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#020617] text-slate-200 font-sans">
      {/* SIDEBAR PROFESIONAL */}
      <nav className="w-80 bg-[#0f172a] border-r border-slate-800 p-8 flex flex-col">
        <h1 className="text-4xl font-black text-blue-500 mb-10 tracking-tighter italic">JEEMIA PRO</h1>
        <div className="space-y-3 flex-1">
          {[
            {id: 'mensajeria-ia', n: '1. Mensajería IA (Directo)', icon: '🚀'},
            {id: 'base-datos', n: '2. Mensajería (Base Datos)', icon: '📊'},
            {id: 'imagenes', n: '3. Nano Banana (Imágenes)', icon: '🎨'},
            {id: 'audios', n: '4. Google AI (Audios)', icon: '🎙️'},
            {id: 'analisis', n: '5. Dashboard Analítica', icon: '📈'}
          ].map(item => (
            <button key={item.id} onClick={() => {setActiveTab(item.id); setAiResponse('');}}
              className={`w-full text-left p-4 rounded-2xl transition-all flex items-center gap-3 ${
                activeTab === item.id ? 'bg-blue-600 text-white shadow-lg' : 'hover:bg-slate-800 text-slate-400'
              }`}>
              <span className="text-xl">{item.icon}</span> <span className="text-sm font-bold">{item.n}</span>
            </button>
          ))}
        </div>
        <div className="mt-auto p-4 bg-slate-900 rounded-2xl border border-slate-800 text-center">
          <p className="text-[10px] text-slate-500">NÚMERO ACTIVO</p>
          <p className="text-blue-400 font-bold text-sm">+{MI_NUMERO}</p>
        </div>
      </nav>

      {/* ÁREA DE TRABAJO */}
      <main className="flex-1 p-10 overflow-y-auto bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950">
        
        {activeTab === 'mensajeria-ia' && (
          <div className="max-w-4xl space-y-6">
            <h2 className="text-3xl font-bold text-white">🚀 Mensajería IA Masiva</h2>
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2 space-y-4">
                <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
                  <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Lista de Números (Mendoza / Argentina)</label>
                  <textarea id="lista_num" className="w-full h-40 bg-slate-950 border border-slate-800 p-4 rounded-xl text-blue-300" placeholder="2615999995, 261XXXXXXX..." />
                </div>
                <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
                  <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Mensaje de Campaña</label>
                  <textarea id="texto_msg" className="w-full h-24 bg-slate-950 border border-slate-800 p-4 rounded-xl" placeholder="Escribe tu propuesta aquí..." />
                </div>
                <button onClick={() => ejecutarEnvio(document.getElementById('lista_num').value, document.getElementById('texto_msg').value)} 
                  className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl text-xl shadow-xl transition-all">🚀 INICIAR ENVÍO MASIVO</button>
                {status && <p className="text-center text-emerald-400 font-black animate-pulse">{status}</p>}
              </div>
              <div className="space-y-4">
                <div className="bg-blue-600/10 border border-blue-500/30 p-6 rounded-3xl">
                  <h3 className="text-blue-400 font-bold mb-4">🤖 Estrategia IA</h3>
                  <button onClick={() => llamarIA('estrategia')} className="w-full py-2 bg-blue-600 rounded-lg text-xs font-bold mb-2">SUGERIR HORARIOS</button>
                  <button onClick={() => llamarIA('mensaje')} className="w-full py-2 bg-slate-800 rounded-lg text-xs font-bold">OPTIMIZAR TEXTO</button>
                  {loading && <p className="text-[10px] mt-4 animate-bounce">Consultando Gemini Flash...</p>}
                  {aiResponse && <div className="mt-4 p-3 bg-slate-950 rounded-xl text-[11px] border border-blue-500/20 leading-relaxed text-slate-300">{aiResponse}</div>}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DASHBOARD ANALÍTICA */}
        {activeTab === 'analisis' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">📈 Panel de Control de Ventas</h2>
              <button className="bg-blue-600 px-6 py-2 rounded-xl text-sm font-bold shadow-lg shadow-blue-900/40">DESCARGAR INFORME MENSUAL</button>
            </div>
            <div className="grid grid-cols-4 gap-6">
              {[{l: 'CALIENTES', v: '42', c: 'text-red-500', bg: 'bg-red-500/10'}, {l: 'TIBIOS', v: '128', c: 'text-orange-400', bg: 'bg-orange-400/10'}, {l: 'FRÍOS', v: '850', c: 'text-blue-400', bg: 'bg-blue-400/10'}, {l: 'EFECTIVIDAD', v: '14%', c: 'text-emerald-400', bg: 'bg-emerald-400/10'}].map(s => (
                <div key={s.l} className={`${s.bg} p-6 rounded-3xl border border-white/5`}>
                  <p className="text-[10px] font-black text-slate-500 tracking-widest">{s.l}</p>
                  <p className={`text-4xl font-black mt-2 ${s.c}`}>{s.v}</p>
                </div>
              ))}
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <h3 className="font-bold mb-6">Registro de Leads Diarios</h3>
              <div className="space-y-4">
                <div className="flex justify-between p-4 bg-slate-950 rounded-xl border border-slate-800 items-center">
                   <span className="font-mono text-xs">26/12/2025</span>
                   <span className="font-bold">1,200 Envíos</span>
                   <span className="text-emerald-400 font-bold">85 Respuestas</span>
                   <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-lg text-[10px] font-black uppercase">Exitoso</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PLACEHOLDERS PARA IMAGEN Y AUDIO */}
        {(activeTab === 'imagenes' || activeTab === 'audios') && (
          <div className="max-w-2xl mx-auto mt-20 bg-slate-900 p-12 rounded-[40px] border border-slate-800 text-center shadow-2xl">
            <div className="text-6xl mb-6">{activeTab === 'imagenes' ? '🎨' : '🎙️'}</div>
            <h2 className="text-2xl font-bold mb-4">{activeTab === 'imagenes' ? 'Nano Banana Pro' : 'Google AI Studio Voice'}</h2>
            <textarea className="w-full h-32 bg-slate-950 border border-slate-800 p-4 rounded-2xl mb-6" placeholder="Describe el contenido a generar..." />
            <button className="w-full py-4 bg-purple-600 rounded-2xl font-bold hover:bg-purple-500 transition-all">GENERAR CONTENIDO</button>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
