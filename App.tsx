import React, { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState('mensajeria');
  const [numeros, setNumeros] = useState('');
  const [msg, setMsg] = useState('');

  // 1. TUS TEXTOS LITERALES - PROTEGIDOS Y EXACTOS
  const plantillas = {
    mza_cap: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de ventas especiales de Jeep y RAM en Genco Automotores Mendoza.\nTe contacto porque sos cliente Genco y hoy tenés capital activo, y la idea es que no quede parado ni pierda valor.\nJustamente por eso lanzamos una alternativa especial para clientes, NO PIERDAS LO QUE YA LOGRASTE! Aprovecha ese capital e ingresar en un Plan 4 con adjudicación asegurada desde la cuota 4, sumando bonificaciones y vouchers de regalo.\nIncluso hoy se puede ingresar a una Jeep Renegade Sport desde $250.000, sin empezar de cero.\n¿Querés que revise tu situación y te diga cuál es la mejor opción hoy para vos?",
    
    mza_post: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM – Genco Automotores Mendoza.\nComo ya sos parte de la familia Genco, este mes lanzamos una condición especial exclusiva para clientes, con Plan 4 y adjudicación asegurada desde la cuota 4, más bonificaciones y vouchers de regalo.\nHoy incluso podés ingresar a una Jeep Renegade Sport desde $250.000, y también hay opciones en Compass, Commander y RAM.\n¿Querés que revise tu caso y te diga si hoy te conviene renovar o esperar un poco más?",
    
    mza_fria: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM en Genco Automotores Mendoza.\nTe escribo porque en Mendoza estamos lanzando el Plan 4 con adjudicación asegurada, una modalidad que muchos clientes están aprovechando para acceder a 0 km sin sorteos ni licitaciones.\n👉 Jeep Renegade desde $250.000 + DNI\n\n👉 También Compass, Commander, RAM Renegade y la nueva RAM Dakota\nLa unidad se adjudica en la cuota 4 en todos los casos.\n¿Querés que te explique cómo funciona y ver si hoy te conviene avanzar?",
    
    sr_fria: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM – Genco Automotores Mendoza.\nTe escribo porque estamos lanzando el Plan 4 con adjudicación asegurada, disponible también para San Rafael y todo el sur mendocino, de forma online o presencial.\n👉 Jeep Renegade desde $250.000 + DNI\n\n👉 También disponibles Compass, Commander, RAM Renegade y la nueva RAM Dakota\nEn todos los casos, la unidad se adjudica en la cuota 4, sin sorteos ni licitaciones.\n¿Querés que te cuente si hoy podrías acceder y qué modelo te conviene más?"
  };

  const enviarWhatsApp = (phone, customMsg = null) => {
    const texto = customMsg || msg;
    const fNum = phone.replace(/\D/g, '').startsWith('54') ? phone : '549' + phone;
    window.open(`https://web.whatsapp.com/send?phone=${fNum}&text=${encodeURIComponent(texto)}`, '_blank');
  };

  const lanzarMasivo = () => {
    const lista = numeros.split(',').map(n => n.trim());
    lista.forEach((num, i) => {
      setTimeout(() => enviarWhatsApp(num), i * 8500); // Fluidez para evitar bloqueos
    });
  };

  return (
    <div className="flex min-h-screen bg-[#010409] text-white font-sans overflow-hidden">
      
      {/* SIDEBAR FIJO */}
      <nav className="w-80 bg-[#0d1117] border-r border-white/10 p-8 flex flex-col gap-3">
        <h1 className="text-2xl font-black text-blue-500 italic mb-10 tracking-tighter">JEEMIA ULTRA</h1>
        <button onClick={() => setTab('mensajeria')} className={`p-4 rounded-xl font-bold text-left transition-all ${tab === 'mensajeria' ? 'bg-blue-600' : 'text-slate-500 hover:bg-white/5'}`}>💬 MENSAJERÍA DIRECTA</button>
        <button onClick={() => setTab('ia')} className={`p-4 rounded-xl font-bold text-left transition-all ${tab === 'ia' ? 'bg-blue-600' : 'text-slate-500 hover:bg-white/5'}`}>🖼️ NANO BANANA PRO</button>
        <button onClick={() => setTab('voz')} className={`p-4 rounded-xl font-bold text-left transition-all ${tab === 'voz' ? 'bg-blue-600' : 'text-slate-500 hover:bg-white/5'}`}>🎙️ VOICE STUDIO</button>
        <button onClick={() => setTab('dashboard')} className={`p-4 rounded-xl font-bold text-left transition-all ${tab === 'dashboard' ? 'bg-blue-600' : 'text-slate-500 hover:bg-white/5'}`}>📊 DASHBOARD GENCO</button>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-12 overflow-y-auto">
        
        {/* MÓDULO 1: MENSAJERÍA CON TUS BOTONES EXACTOS */}
        {tab === 'mensajeria' && (
          <div className="max-w-5xl space-y-6">
            <h2 className="text-4xl font-black italic uppercase">Consola de Envío</h2>
            <div className="bg-[#161b22] p-8 rounded-[30px] border border-white/5 space-y-6 shadow-2xl">
              <textarea value={numeros} onChange={(e) => setNumeros(e.target.value)} className="w-full h-24 bg-black border border-white/10 rounded-2xl p-4 text-blue-400 font-mono" placeholder="Base de números (con coma)..." />
              
              <div className="grid grid-cols-2 gap-4">
                <button onClick={() => setMsg(plantillas.mza_cap)} className="p-4 bg-blue-900/40 border border-blue-500/50 rounded-xl text-[10px] font-black uppercase italic hover:bg-blue-800/60 transition-all">📍 MZA Capital Clientes</button>
                <button onClick={() => setMsg(plantillas.mza_post)} className="p-4 bg-purple-900/40 border border-purple-500/50 rounded-xl text-[10px] font-black uppercase italic hover:bg-purple-800/60 transition-all">🛠️ MZA Postventa</button>
                <button onClick={() => setMsg(plantillas.mza_fria)} className="p-4 bg-orange-900/40 border border-orange-500/50 rounded-xl text-[10px] font-black uppercase italic hover:bg-orange-800/60 transition-all">❄️ MZA Base Fría</button>
                <button onClick={() => setMsg(plantillas.sr_fria)} className="p-4 bg-emerald-900/40 border border-emerald-500/50 rounded-xl text-[10px] font-black uppercase italic hover:bg-emerald-800/60 transition-all">📍 San Rafael Fría</button>
              </div>

              <div className="p-4 bg-black/50 border border-dashed border-white/10 rounded-xl flex justify-between items-center text-[10px] font-bold text-slate-500">
                <span>ADJUNTAR PDF O JPG (MODELOS / CATÁLOGOS)</span>
                <input type="file" />
              </div>

              <textarea value={msg} onChange={(e) => setMsg(e.target.value)} className="w-full h-64 bg-black border border-white/10 rounded-3xl p-6 text-lg leading-relaxed shadow-inner" placeholder="Seleccione una plantilla o escriba aquí..." />
              
              <button onClick={lanzarMasivo} className="w-full py-6 bg-emerald-600 hover:bg-emerald-500 rounded-[30px] text-2xl font-black uppercase italic shadow-xl transition-all">Lanzar a Números Directo</button>
            </div>
          </div>
        )}

        {/* DASHBOARD: CON BOTÓN DE CIERRE DIRECTO */}
        {tab === 'dashboard' && (
          <div className="max-w-5xl space-y-8">
            <h2 className="text-4xl font-black italic uppercase">Análisis y Estadísticas Genco</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-[#161b22] p-8 rounded-3xl border border-red-500/20 text-center animate-pulse"><p className="text-[10px] font-bold text-slate-500 mb-2 uppercase">Calientes</p><p className="text-5xl font-black text-red-500 italic">42</p></div>
              <div className="bg-[#161b22] p-8 rounded-3xl border border-orange-500/20 text-center"><p className="text-[10px] font-bold text-slate-500 mb-2 uppercase">Tibios</p><p className="text-5xl font-black text-orange-500 italic">118</p></div>
              <div className="bg-[#161b22] p-8 rounded-3xl border border-blue-500/20 text-center"><p className="text-[10px] font-bold text-slate-500 mb-2 uppercase">Total Mes</p><p className="text-5xl font-black text-blue-500 italic">1.240</p></div>
              <div className="bg-[#161b22] p-8 rounded-3xl border border-emerald-500/20 text-center"><p className="text-[10px] font-bold text-slate-500 mb-2 uppercase">Respondieron</p><p className="text-5xl font-black text-emerald-500 italic">312</p></div>
            </div>

            <div className="bg-[#161b22] rounded-[30px] border border-white/5 overflow-hidden shadow-2xl">
              <table className="w-full text-left text-xs italic">
                <thead className="bg-white/5 font-black text-slate-500 uppercase"><tr className="border-b border-white/5"><th className="p-6">Lead</th><th>Base</th><th>Respuesta Detectada</th><th>Gestión</th></tr></thead>
                <tbody className="font-bold">
                  {[
                    { nom: 'Juan Manuel (260455...)', base: 'San Rafael', res: 'Me interesa la RAM, ¿toman usados?', tel: '5492604555555' },
                    { nom: 'Sosa (261544...)', base: 'Mendoza', res: 'Quiero ver el Renegade Sport', tel: '5492615444444' }
                  ].map((l, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-all">
                      <td className="p-6 text-blue-400">{l.nom}</td>
                      <td className="uppercase text-slate-400">{l.base}</td>
                      <td className="text-emerald-400 italic">"{l.res}"</td>
                      <td>
                        <button onClick={() => enviarWhatsApp(l.tel, `Hola! Soy Adrián de Genco. Te contacto por tu interés en la unidad, ¡tengo una propuesta excelente para tu usado!`)} className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-full text-[9px] font-black uppercase italic shadow-lg transition-all">🔥 CERRAR VENTA</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex gap-4">
              <button className="flex-1 py-4 bg-white text-black font-black rounded-2xl uppercase text-[10px]">Descargar Informe Diario PDF</button>
              <button className="flex-1 py-4 bg-slate-800 text-white font-black rounded-2xl uppercase text-[10px]">Enviar Reporte Semanal a Genco</button>
            </div>
          </div>
        )}

        {/* NANO BANANA PRO */}
        {tab === 'ia' && (
          <div className="max-w-4xl mx-auto space-y-6 text-center py-20">
             <h2 className="text-6xl font-black text-yellow-500 italic uppercase">Nano Banana Pro</h2>
             <p className="text-slate-500 font-bold uppercase tracking-[0.3em]">Control de Ratios e Imagen de Referencia Activado.</p>
             <div className="grid grid-cols-3 gap-4 mt-10">
                <div className="p-10 bg-[#161b22] rounded-3xl border border-white/5 italic font-black text-xs text-slate-500">1:1 POST</div>
                <div className="p-10 bg-[#161b22] rounded-3xl border border-white/5 italic font-black text-xs text-slate-500">9:16 STORY</div>
                <div className="p-10 bg-[#161b22] rounded-3xl border border-white/5 italic font-black text-xs text-slate-500">16:9 BANNER</div>
             </div>
          </div>
        )}

        {/* VOICE STUDIO */}
        {tab === 'voz' && (
          <div className="max-w-4xl mx-auto space-y-6 text-center py-20">
             <h2 className="text-6xl font-black text-blue-400 italic uppercase tracking-tighter">Voice Studio Google</h2>
             <p className="text-slate-500 font-bold uppercase tracking-[0.3em]">Moduladores de Tono Grave/Agudo habilitados.</p>
             <div className="mt-10 p-10 bg-[#161b22] rounded-3xl border border-blue-500/20 max-w-md mx-auto">
                <div className="h-2 w-full bg-blue-900/30 rounded-full overflow-hidden mb-4"><div className="h-full w-2/3 bg-blue-500"></div></div>
                <p className="text-[10px] font-black text-blue-400 uppercase italic">Procesando Modulación Empresarial...</p>
             </div>
          </div>
        )}
      </main>
    </div>
  );
}
