import React, { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('mensajeria-ia');
  const [status, setStatus] = useState('');
  const [mensajeSeleccionado, setMensajeSeleccionado] = useState('mensaje1');
  
  const MI_NUMERO = "549261599995";

  // BIBLIOTECA DE MENSAJES PRE-GUARDADOS
  const plantillas = {
    mensaje1: "Hola! 👋 Te escribo de JEEMIA para comentarte nuestra nueva propuesta...",
    mensaje2: "¡Hola! 🚀 Tenemos una oferta exclusiva para vos. Adjunto el catálogo en PDF abajo.",
    mensaje3: "Estimado cliente, ¿cómo estás? Te contacto para darte seguimiento a lo charlado..."
  };

  const ejecutarEnvioDirecto = (idLista: string) => {
    const lista = (document.getElementById(idLista) as HTMLTextAreaElement).value;
    const msg = plantillas[mensajeSeleccionado];
    
    if(!lista) return alert("Por favor, carga los números de destino");
    
    setStatus('🚀 Iniciando campaña directa...');
    const numeros = lista.split(',').map(n => n.trim());
    
    numeros.forEach((num, index) => {
      let limpio = num.replace(/\D/g, '');
      if (!limpio.startsWith('549')) limpio = '549' + limpio;
      
      setTimeout(() => {
        // Enlace directo a WhatsApp Web
        const url = `https://web.whatsapp.com/send?phone=${limpio}&text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
        if(index === numeros.length - 1) setStatus('✅ Pestañas abiertas correctamente');
      }, index * 4500); // 4.5 segundos de espera para que cargue WhatsApp Web con calma
    });
  };

  return (
    <div className="flex min-h-screen bg-[#020617] text-white font-sans">
      {/* SIDEBAR */}
      <nav className="w-80 bg-[#0f172a] border-r border-slate-800 p-8 flex flex-col">
        <h1 className="text-4xl font-black text-blue-500 tracking-tighter text-center mb-10">JEEMIA PRO</h1>
        <div className="space-y-3 flex-1">
          {[
            {id: 'mensajeria-ia', n: '1. Mensajería IA (Directo)', i: '🚀'},
            {id: 'base-datos', n: '2. Mensajería (Base Datos)', i: '📊'},
            {id: 'imagenes', n: '3. Nano Banana Pro', i: '🎨'},
            {id: 'audios', n: '4. Google AI Voice', i: '🎙️'},
            {id: 'analisis', n: '5. Dashboard Analítica', i: '📈'}
          ].map(item => (
            <button key={item.id} onClick={() => setActiveTab(item.id)}
              className={`w-full text-left p-4 rounded-2xl transition-all flex items-center gap-4 ${
                activeTab === item.id ? 'bg-blue-600 text-white shadow-xl' : 'hover:bg-slate-800 text-slate-400'
              }`}>
              <span className="text-xl">{item.i}</span>
              <span className="text-sm font-bold">{item.n}</span>
            </button>
          ))}
        </div>
        <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-center">
          <p className="text-[10px] text-slate-500 mb-1 font-bold">WHATSAPP BUSINESS</p>
          <p className="text-blue-400 font-mono text-sm">+{MI_NUMERO}</p>
        </div>
      </nav>

      {/* CONTENIDO */}
      <main className="flex-1 p-10 overflow-y-auto bg-slate-950">
        
        {activeTab === 'mensajeria-ia' && (
          <div className="max-w-4xl space-y-6">
            <h2 className="text-3xl font-black italic">🚀 Consola de Envío Directo</h2>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2 space-y-5">
                
                {/* LISTA DE NÚMEROS */}
                <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
                  <label className="text-[10px] font-black text-slate-500 uppercase mb-3 block tracking-widest">Base de Números</label>
                  <textarea id="num_masivo" className="w-full h-32 bg-slate-950 border border-slate-800 p-4 rounded-xl text-blue-300 font-mono text-sm" placeholder="2615999995, 261XXXXXXX..." />
                </div>

                {/* SELECTOR DE PLANTILLAS */}
                <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
                  <label className="text-[10px] font-black text-blue-400 uppercase mb-3 block tracking-widest italic">📑 Seleccionar Plantilla de Mensaje</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['mensaje1', 'mensaje2', 'mensaje3'].map(m => (
                      <button 
                        key={m} 
                        onClick={() => setMensajeSeleccionado(m)}
                        className={`py-2 rounded-lg text-[10px] font-bold transition-all border ${mensajeSeleccionado === m ? 'bg-blue-600 border-blue-400' : 'bg-slate-950 border-slate-700 text-slate-500'}`}
                      >
                        {m.toUpperCase()}
                      </button>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400 italic">
                    "{plantillas[mensajeSeleccionado]}"
                  </div>
                </div>

                {/* CARGA DE PDF */}
                <div className="bg-blue-600/5 p-6 rounded-3xl border border-dashed border-blue-500/30">
                  <label className="text-[10px] font-black text-blue-400 uppercase mb-3 block tracking-widest italic">📎 Adjuntar Catálogo o PDF</label>
                  <input type="file" className="text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-blue-600 file:text-white" />
                </div>

                <button onClick={() => ejecutarEnvioDirecto('num_masivo')} 
                  className="w-full py-6 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-[32px] text-2xl shadow-xl shadow-emerald-900/20 transition-all">
                  🚀 LANZAR CAMPAÑA
                </button>
                {status && <p className="text-center text-emerald-400 font-bold animate-pulse">{status}</p>}
              </div>

              {/* ASISTENTE IA */}
              <div className="space-y-4">
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-[32px]">
                  <h3 className="text-blue-400 font-black text-xs mb-4 uppercase">🛡️ Filtros IA</h3>
                  <button className="w-full py-3 bg-slate-800 rounded-xl text-xs font-bold mb-2">EVITAR BANEO</button>
                  <button className="w-full py-3 bg-slate-800 rounded-xl text-xs font-bold">HORARIO ÓPTIMO</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DASHBOARD */}
        {activeTab === 'analisis' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-black">Métricas de Campaña</h2>
            <div className="grid grid-cols-4 gap-6">
              {[{l:'CALIENTES', v:'42', c:'text-red-500'}, {l:'TIBIOS', v:'128', c:'text-orange-500'}, {l:'FRÍOS', v:'850', c:'text-blue-500'}, {l:'EFECT.', v:'14%', c:'text-emerald-500'}].map(s => (
                <div key={s.l} className="bg-slate-900/50 p-8 rounded-[40px] border border-white/5 text-center">
                  <p className="text-[10px] font-bold text-slate-500 tracking-[0.2em]">{s.l}</p>
                  <p className={`text-5xl font-black mt-3 ${s.c}`}>{s.v}</p>
                </div>
              ))}
            </div>
            <button className="w-full py-4 bg-blue-600/10 text-blue-400 border border-blue-500/20 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
               Descargar Informe Completo Mensual (PDF)
            </button>
          </div>
        )}

        {/* OTROS MODULOS (VISTA PROFESIONAL) */}
        {(activeTab === 'imagenes' || activeTab === 'audios' || activeTab === 'base-datos') && (
          <div className="max-w-2xl mx-auto mt-20 bg-slate-900 p-12 rounded-[40px] border border-slate-800 text-center">
            <h2 className="text-2xl font-black mb-6 uppercase tracking-widest italic">{activeTab.toUpperCase().replace('-',' ')}</h2>
            <div className="p-10 border-2 border-dashed border-slate-800 rounded-3xl mb-6">
               <p className="text-slate-500">Módulo listo para conexión con Google Studio</p>
            </div>
            <button className="w-full py-4 bg-blue-600 rounded-2xl font-black uppercase tracking-widest text-xs">Activar Módulo</button>
          </div>
        )}

      </main>
    </div>
  );
};

export default App;
