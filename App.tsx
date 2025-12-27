import React, { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('mensajeria-ia');
  const [status, setStatus] = useState('');
  const MI_NUMERO = "549261599995";

  // Lógica de Envío Directo a WhatsApp Web
  const ejecutarEnvioDirecto = (idLista: string, idMsg: string) => {
    const lista = (document.getElementById(idLista) as HTMLTextAreaElement).value;
    const msg = (document.getElementById(idMsg) as HTMLTextAreaElement).value;
    
    if(!lista || !msg) return alert("Por favor, completa los números y el mensaje");
    
    setStatus('🚀 Iniciando campaña directa...');
    const numeros = lista.split(',').map(n => n.trim());
    
    numeros.forEach((num, index) => {
      let limpio = num.replace(/\D/g, '');
      if (!limpio.startsWith('549')) limpio = '549' + limpio;
      
      setTimeout(() => {
        // Protocolo directo para saltear la pantalla intermedia de confirmación
        const url = `https://web.whatsapp.com/send?phone=${limpio}&text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
        if(index === numeros.length - 1) setStatus('✅ Pestañas abiertas. ¡Revisa tu WhatsApp!');
      }, index * 4000); // 4 segundos de delay para estabilidad
    });
  };

  return (
    <div className="flex min-h-screen bg-[#020617] text-white font-sans">
      {/* SIDEBAR ACTUALIZADO */}
      <nav className="w-80 bg-[#0f172a] border-r border-slate-800 p-8 flex flex-col">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black text-blue-500 tracking-tighter">JEEMIA PRO</h1>
          <p className="text-[10px] text-slate-500 tracking-widest uppercase mt-1">AI Business Suite</p>
        </div>
        
        <div className="space-y-3 flex-1">
          {[
            {id: 'mensajeria-ia', n: '1. Mensajería IA (Directo)', i: '🚀'},
            {id: 'base-datos', n: '2. Mensajería (Base Datos)', i: '📊'},
            {id: 'imagenes', n: '3. Nano Banana Pro (Imágenes)', i: '🎨'},
            {id: 'audios', n: '4. Google AI (Texto a Voz)', i: '🎙️'},
            {id: 'analisis', n: '5. Dashboard de Analítica', i: '📈'}
          ].map(item => (
            <button key={item.id} onClick={() => setActiveTab(item.id)}
              className={`w-full text-left p-4 rounded-2xl transition-all flex items-center gap-4 ${
                activeTab === item.id ? 'bg-blue-600 text-white shadow-xl shadow-blue-900/40' : 'hover:bg-slate-800 text-slate-400'
              }`}>
              <span className="text-xl">{item.i}</span>
              <span className="text-sm font-bold">{item.n}</span>
            </button>
          ))}
        </div>

        <div className="mt-auto p-4 bg-slate-900 rounded-2xl border border-slate-800">
          <p className="text-[10px] text-slate-500 mb-1 tracking-widest">CUENTA ACTIVA</p>
          <p className="text-blue-400 font-mono text-sm">+{MI_NUMERO}</p>
        </div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-10 overflow-y-auto bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950">
        
        {/* PESTAÑA 1: MENSAJERÍA DIRECTA */}
        {activeTab === 'mensajeria-ia' && (
          <div className="max-w-4xl space-y-6">
            <h2 className="text-3xl font-black">Mensajería Inteligente</h2>
            <p className="text-slate-400 -mt-4">Envío masivo directo con optimización de frecuencia por IA.</p>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2 space-y-5">
                <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
                  <label className="text-[10px] font-black text-slate-500 uppercase mb-3 block tracking-widest">Base de Números (Separados por coma)</label>
                  <textarea id="num_masivo" className="w-full h-32 bg-slate-950 border border-slate-800 p-4 rounded-xl text-blue-300 font-mono text-sm" placeholder="Ej: 5491100000, 5491122222..." />
                </div>

                {/* CAMPO DE ARCHIVOS/PLANTILLAS */}
                <div className="bg-blue-600/5 p-6 rounded-3xl border border-dashed border-blue-500/30">
                  <label className="text-[10px] font-black text-blue-400 uppercase mb-3 block tracking-widest italic">📎 Adjuntar Plantilla o PDF (Catálogo)</label>
                  <input type="file" className="text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-blue-600 file:text-white" />
                </div>

                <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
                  <label className="text-[10px] font-black text-slate-500 uppercase mb-3 block tracking-widest">Mensaje de Campaña</label>
                  <textarea id="msg_masivo" className="w-full h-24 bg-slate-950 border border-slate-800 p-4 rounded-xl text-slate-200" placeholder="Escribe el mensaje que enviará Ana..." />
                </div>

                <button onClick={() => ejecutarEnvioDirecto('num_masivo', 'msg_masivo')} 
                  className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-3xl text-xl shadow-xl transition-all">
                  🚀 INICIAR ENVÍO
                </button>
                {status && <p className="text-center text-emerald-400 font-bold animate-pulse">{status}</p>}
              </div>

              <div className="space-y-4">
                <div className="bg-[#1e293b]/50 border border-slate-800 p-6 rounded-3xl">
                  <h3 className="text-blue-400 font-black text-xs mb-4 tracking-widest uppercase">🛡️ Soporte Estratégico</h3>
                  <button className="w-full py-3 bg-blue-600 rounded-xl text-xs font-bold mb-2 shadow-lg">Analizar Frecuencia</button>
                  <button className="w-full py-3 bg-slate-800 rounded-xl text-xs font-bold">Sugerir Horarios</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PESTAÑA 2: MENSAJERÍA CON BASE (Subir Excel/PDF) */}
        {activeTab === 'base-datos' && (
          <div className="max-w-4xl space-y-6 text-center py-10">
            <h2 className="text-3xl font-black mb-10">Carga de Base de Datos</h2>
            <div className="bg-slate-900 border-2 border-dashed border-slate-800 rounded-[40px] p-20">
              <div className="mb-6 text-5xl">📄</div>
              <p className="text-slate-400 mb-6">Subir archivo Excel o CSV con tus contactos</p>
              <input type="file" className="hidden" id="excel_upload" />
              <button onClick={() => document.getElementById('excel_upload')?.click()} className="bg-blue-600 px-8 py-4 rounded-2xl font-black text-sm">SELECCIONAR ARCHIVO</button>
            </div>
            {/* Campo adicional de PDF para Base de Datos */}
            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 text-left mt-6">
              <label className="text-[10px] font-black text-blue-400 uppercase mb-3 block tracking-widest">📎 PDF Adjunto para esta Base</label>
              <input type="file" className="text-xs text-slate-500" />
            </div>
          </div>
        )}

        {/* PESTAÑA 5: DASHBOARD ACTUALIZADO */}
        {activeTab === 'analisis' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-black">Panel de Resultados Reales</h2>
              <button className="bg-blue-600/20 text-blue-400 border border-blue-500/40 px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest">Descargar Informe Mensual (PDF)</button>
            </div>
            <div className="grid grid-cols-4 gap-6">
              {[{l: 'CALIENTES', v: '42', c: 'text-red-500', bg: 'bg-red-500/10'}, {l: 'TIBIOS', v: '128', c: 'text-orange-500', bg: 'bg-orange-500/10'}, {l: 'FRÍOS', v: '850', c: 'text-blue-500', bg: 'bg-blue-500/10'}, {l: 'EFECTIVIDAD', v: '14%', c: 'text-emerald-500', bg: 'bg-emerald-500/10'}].map(s => (
                <div key={s.l} className={`${s.bg} p-8 rounded-[32px] border border-white/5`}>
                  <p className="text-[10px] font-black text-slate-500 tracking-widest">{s.l}</p>
                  <p className={`text-5xl font-black mt-2 ${s.c}`}>{s.v}</p>
                </div>
              ))}
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-[32px] p-8">
              <h3 className="font-bold mb-6 text-slate-400">Registro de Envíos Diarios</h3>
              <div className="w-full flex justify-between p-4 bg-slate-950 rounded-2xl border border-slate-800 text-xs font-bold text-slate-500 uppercase tracking-widest">
                <span>Fecha: 26/12/2025</span>
                <span>Enviados: 1,200</span>
                <span className="text-emerald-400">Estado: Completado</span>
              </div>
            </div>
          </div>
        )}

        {/* PESTAÑAS VACÍAS (IMÁGENES Y AUDIO) */}
        {(activeTab === 'imagenes' || activeTab === 'audios') && (
          <div className="max-w-2xl mx-auto mt-20 bg-slate-900 p-12 rounded-[40px] border border-slate-800 text-center shadow-2xl">
            <h2 className="text-2xl font-black mb-6 uppercase tracking-widest">{activeTab === 'imagenes' ? '🎨 Nano Banana Pro' : '🎙️ Google AI Voice'}</h2>
            <textarea className="w-full h-32 bg-slate-950 border border-slate-800 p-4 rounded-2xl mb-6" placeholder="Describe lo que quieres generar..." />
            <button className="w-full py-4 bg-purple-600 rounded-2xl font-black shadow-lg shadow-purple-900/40">GENERAR CONTENIDO</button>
          </div>
        )}

      </main>
    </div>
  );
};

export default App;
