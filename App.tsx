import React, { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState('mensajeria');
  const [numeros, setNumeros] = useState('');
  const [msg, setMsg] = useState('');

  // 1. TUS TEXTOS LITERALES (PROHIBIDO TOCAR)
  const plantillas = {
    mza_cap: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de ventas especiales de Jeep y RAM en Genco Automotores Mendoza.\nTe contacto porque sos cliente Genco y hoy tenés capital activo, y la idea es que no quede parado ni pierda valor.\nJustamente por eso lanzamos una alternativa especial para clientes, NO PIERDAS LO QUE YA LOGRASTE! Aprovecha ese capital e ingresar en un Plan 4 con adjudicación asegurada desde la cuota 4, sumando bonificaciones y vouchers de regalo.\nIncluso hoy se puede ingresar a una Jeep Renegade Sport desde $250.000, sin empezar de cero.\n¿Querés que revise tu situación y te diga cuál es la mejor opción hoy para vos?",
    mza_post: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM – Genco Automotores Mendoza.\nComo ya sos parte de la familia Genco, este mes lanzamos una condición especial exclusiva para clientes, con Plan 4 y adjudicación asegurada desde la cuota 4, más bonificaciones y vouchers de regalo.\nHoy incluso podés ingresar a una Jeep Renegade Sport desde $250.000, y también hay opciones en Compass, Commander y RAM.\n¿Querés que revise tu caso y te diga si hoy te conviene renovar o esperar un poco más?",
    mza_fria: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM en Genco Automotores Mendoza.\nTe escribo porque en Mendoza estamos lanzando el Plan 4 con adjudicación asegurada, una modalidad que muchos clientes están aprovechando para acceder a 0 km sin sorteos ni licitaciones.\n👉 Jeep Renegade desde $250.000 + DNI\n👉 También Compass, Commander, RAM Renegade y la nueva RAM Dakota\nLa unidad se adjudica en la cuota 4 en todos los casos.\n¿Querés que te explique cómo funciona y ver si hoy te conviene avanzar?",
    sr_fria: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM – Genco Automotores Mendoza.\nTe escribo porque estamos lanzando el Plan 4 con adjudicación asegurada, disponible también para San Rafael y todo el sur mendocino, de forma online o presencial.\n👉 Jeep Renegade desde $250.000 + DNI\n👉 También disponibles Compass, Commander, RAM Renegade y la nueva RAM Dakota\nEn todos los casos, la unidad se adjudica en la cuota 4, sin sorteos ni licitaciones.\n¿Querés que te cuente si hoy podrías acceder y qué modelo te conviene más?"
  };

  const enviarWhatsApp = (phone, customMsg = null) => {
    const texto = customMsg || msg;
    const fNum = phone.replace(/\D/g, '').startsWith('54') ? phone : '549' + phone;
    window.open(`https://web.whatsapp.com/send?phone=${fNum}&text=${encodeURIComponent(texto)}`, '_blank');
  };

  const enviarMasivo = () => {
    const lista = numeros.split(',').map(n => n.trim());
    lista.forEach((num, i) => {
      setTimeout(() => enviarWhatsApp(num), i * 8000);
    });
  };

  return (
    <div className="flex min-h-screen bg-[#010409] text-white font-sans">
      {/* SIDEBAR */}
      <nav className="w-80 bg-[#0d1117] border-r border-white/10 p-8 flex flex-col gap-3">
        <h1 className="text-2xl font-black text-blue-500 italic mb-10">JEEMIA ULTRA</h1>
        <button onClick={() => setTab('mensajeria')} className={`p-4 rounded-xl font-bold text-left ${tab === 'mensajeria' ? 'bg-blue-600' : 'text-slate-500 hover:bg-white/5'}`}>💬 MENSAJERÍA</button>
        <button onClick={() => setTab('ia')} className={`p-4 rounded-xl font-bold text-left ${tab === 'ia' ? 'bg-blue-600' : 'text-slate-500 hover:bg-white/5'}`}>🖼️ NANO BANANA PRO</button>
        <button onClick={() => setTab('voz')} className={`p-4 rounded-xl font-bold text-left ${tab === 'voz' ? 'bg-blue-600' : 'text-slate-500 hover:bg-white/5'}`}>🎙️ VOICE STUDIO</button>
        <button onClick={() => setTab('dashboard')} className={`p-4 rounded-xl font-bold text-left ${tab === 'dashboard' ? 'bg-blue-600' : 'text-slate-500 hover:bg-white/5'}`}>📊 DASHBOARD GENCO</button>
      </nav>

      <main className="flex-1 p-12 overflow-y-auto bg-[#010409]">
        {tab === 'mensajeria' && (
          <div className="max-w-5xl space-y-6">
            <h2 className="text-4xl font-black italic uppercase">Consola de Envío</h2>
            <div className="bg-[#161b22] p-8 rounded-[30px] border border-white/5 space-y-6">
              <textarea value={numeros} onChange={(e) => setNumeros(e.target.value)} className="w-full h-24 bg-black border border-white/10 rounded-2xl p-4 text-blue-400 font-mono" placeholder="Números separados por coma..." />
              
              <div className="grid grid-cols-2 gap-4">
                <button onClick={() => setMsg(plantillas.mza_cap)} className="p-4 bg-blue-900/40 border border-blue-500/50 rounded-xl text-[10px] font-black uppercase italic">MZA Capital (Clientes)</button>
                <button onClick={() => setMsg(plantillas.mza_post)} className="p-4 bg-purple-900/40 border border-purple-500/50 rounded-xl text-[10px] font-black uppercase italic">MZA Postventa</button>
                <button onClick={() => setMsg(plantillas.mza_fria)} className="p-4 bg-orange-900/40 border border-orange-500/50 rounded-xl text-[10px] font-black uppercase italic">MZA Base Fría</button>
                <button onClick={() => setMsg(plantillas.sr_fria)} className="p-4 bg-emerald-900/40 border border-emerald-500/50 rounded-xl text-[10px] font-black uppercase italic">San Rafael Fría</button>
              </div>

              <div className="p-4 bg-black/50 border border-dashed border-white/10 rounded-xl flex justify-between items-center text-[10px] font-bold text-slate-500">
                <span>ADJUNTAR PDF / JPG (CATÁLOGOS)</span>
                <input type="file" />
              </div>

              <textarea value={msg} onChange={(e) => setMsg(e.target.value)} className="w-full h-64 bg-black border border-white/10 rounded-3xl p-6 text-lg leading-relaxed" placeholder="Mensaje..." />
              <button onClick={enviarMasivo} className="w-full py-6 bg-emerald-600 rounded-[30px] text-2xl font-black uppercase italic shadow-xl">Lanzar Envío Directo</button>
            </div>
          </div>
        )}

        {tab === 'dashboard' && (
          <div className="max-w-5xl space-y-8">
            <h2 className="text-4xl font-black italic uppercase">Dashboard Genco Pro</h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-[#161b22] p-8 rounded-3xl border border-red-500/20 text-center"><p className="text-[10px] font-bold text-slate-500 mb-2 uppercase">Calientes</p><p className="text-5xl font-black text-red-500 italic">42</p></div>
              <div className="bg-[#161b22] p-8 rounded-3xl border border-orange-500/20 text-center"><p className="text-[10px] font-bold text-slate-500 mb-2 uppercase">Tibios</p><p className="text-5xl font-black text-orange-500 italic">118</p></div>
              <div className="bg-[#161b22] p-8 rounded-3xl border border-blue-500/20 text-center"><p className="text-[10px] font-bold text-slate-500 mb-2 uppercase">Total Mes</p><p className="text-5xl font-black text-blue-500 italic">1.240</p></div>
            </div>

            <div className="bg-[#161b22] rounded-[30px] border border-white/5 overflow-hidden shadow-2xl">
              <table className="w-full text-left text-xs italic">
                <thead className="bg-white/5 font-black text-slate-500 uppercase"><tr className="border-b border-white/5"><th className="p-6">Lead</th><th>Interés</th><th>Respuesta</th><th>Acción</th></tr></thead>
                <tbody className="font-bold">
                  {[
                    { nom: 'Juan Manuel (260455...)', int: 'RAM 1500', res: '¿Toman usados?', tel: '5492604555555' },
                    { nom: 'Sosa (261544...)', int: 'Renegade', res: 'Pasame precios', tel: '5492615444444' }
                  ].map((l, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-all">
                      <td className="p-6 text-blue-400">{l.nom}</td>
                      <td>{l.int}</td>
                      <td className="text-emerald-400 italic">"{l.res}"</td>
                      <td>
                        <button onClick={() => enviarWhatsApp(l.tel, `Hola! Soy Adrián de Genco. Te hablo por tu consulta de la ${l.int}, tenemos una adjudicación asegurada para vos...`)} className="px-4 py-2 bg-red-600 rounded-full text-[9px] font-black uppercase italic shadow-lg">🔥 CERRAR VENTA</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* MODULOS IA */}
        {tab === 'ia' && <div className="p-20 text-center"><h2 className="text-6xl font-black text-yellow-500 italic">NANO BANANA PRO</h2><p className="text-slate-500 uppercase tracking-widest mt-4">Control de Ratios e Imagen de Referencia Activado.</p></div>}
        {tab === 'voz' && <div className="p-20 text-center"><h2 className="text-6xl font-black text-blue-400 italic uppercase">Voice Studio Google</h2><p className="text-slate-500 uppercase tracking-widest mt-4">Moduladores de Tono Grave/Agudo habilitados.</p></div>}
      </main>
    </div>
  );
}
