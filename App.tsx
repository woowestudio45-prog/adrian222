import React, { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState('mensajeria');
  const [numeros, setNumeros] = useState('');
  const [msg, setMsg] = useState('');
  const [archivo, setArchivo] = useState<string>('');

  const plantillas = {
    sr: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM – Genco Automotores Mendoza.\nTe escribo porque estamos lanzando el Plan 4 con adjudicación asegurada, disponible también para San Rafael y todo el sur mendocino.\n\n👉 Jeep Renegade desde $250.000 + DNI\n👉 También Compass, Commander, RAM Renegade y la nueva RAM Dakota.\n\nLa unidad se adjudica en la cuota 4, sin sorteos ni licitaciones.\n¿Querés que te cuente si hoy podrías acceder?",
    mza_base: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM en Genco Automotores Mendoza.\nTe escribo porque estamos lanzando el Plan 4 con adjudicación asegurada para acceder a tu 0 km sin sorteos ni licitaciones.\n\n👉 Jeep Renegade desde $250.000 + DNI\n👉 También Compass, Commander, RAM Renegade y la nueva RAM Dakota.\n\n¿Querés que te explique cómo funciona y ver si hoy te conviene avanzar?",
    post_venta: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM – Genco Automotores Mendoza.\nComo ya sos parte de la familia Genco, lanzamos una condición especial para clientes: Plan 4 con adjudicación asegurada + bonificaciones y vouchers de regalo.\n\nPodés renovar por una Jeep Renegade Sport desde $250.000.\n¿Querés que revise tu caso y te diga si te conviene renovar ahora?",
    capital: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de ventas especiales en Genco Mendoza.\nTe contacto porque tenés capital activo en Genco y la idea es que no pierda valor. Lanzamos un Plan 4 con adjudicación asegurada desde la cuota 4.\n\nPodés ingresar a una Jeep Renegade Sport desde $250.000 sin empezar de cero.\n¿Querés que revise cuál es la mejor opción para aprovechar tu capital?"
  };

  const enviarWhatsApp = () => {
    const lista = numeros.split(',').map(n => n.trim().replace(/\D/g, ''));
    lista.forEach((num, i) => {
      let fNum = num.startsWith('54') ? num : '549' + num;
      setTimeout(() => {
        // ENLACE DIRECTO
        window.open(`https://api.whatsapp.com/send?phone=${fNum}&text=${encodeURIComponent(msg)}`, '_blank');
      }, i * 3500);
    });
  };

  return (
    <div className="flex min-h-screen bg-[#020617] text-white font-sans">
      <nav className="w-64 bg-[#070e1e] border-r border-white/5 p-6 flex flex-col gap-4 shadow-2xl">
        <h1 className="text-2xl font-black text-blue-500 italic mb-6">JEEMIA PRO</h1>
        <button onClick={() => setTab('mensajeria')} className={`p-4 rounded-xl text-left text-[10px] font-bold ${tab === 'mensajeria' ? 'bg-blue-600' : 'text-slate-500 hover:bg-white/5'}`}>🚀 ENVIAR MENSAJES</button>
        <button onClick={() => setTab('ia')} className="p-4 rounded-xl text-left text-[10px] font-bold text-slate-500">🎨 NANO BANANA</button>
        <button onClick={() => setTab('stats')} className="p-4 rounded-xl text-left text-[10px] font-bold text-slate-500">📈 ESTADÍSTICAS</button>
      </nav>

      <main className="flex-1 p-10 bg-slate-950">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-4xl font-black italic uppercase tracking-tighter">Consola Adrián - Genco</h2>
          
          <div className="bg-slate-900/50 p-8 rounded-[40px] border border-white/5 space-y-6 shadow-2xl">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-blue-500 uppercase tracking-widest">1. Números (Separados por coma)</label>
              <textarea value={numeros} onChange={(e) => setNumeros(e.target.value)} className="w-full h-20 bg-slate-950 border border-white/10 rounded-2xl p-4 text-blue-300 outline-none" placeholder="2604105595, 2615999995..." />
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <button onClick={() => setMsg(plantillas.sr)} className="px-4 py-2 bg-slate-800 rounded-lg text-[10px] font-bold hover:bg-blue-600">SAN RAFAEL</button>
                <button onClick={() => setMsg(plantillas.mza_base)} className="px-4 py-2 bg-slate-800 rounded-lg text-[10px] font-bold hover:bg-blue-600">MZA BASE</button>
                <button onClick={() => setMsg(plantillas.post_venta)} className="px-4 py-2 bg-slate-800 rounded-lg text-[10px] font-bold hover:bg-blue-600">POST VENTA</button>
                <button onClick={() => setMsg(plantillas.capital)} className="px-4 py-2 bg-slate-800 rounded-lg text-[10px] font-bold hover:bg-blue-600">CAPITAL</button>
              </div>
              <label className="text-[10px] font-black text-emerald-500 uppercase tracking-widest block">2. Mensaje de Venta</label>
              <textarea value={msg} onChange={(e) => setMsg(e.target.value)} className="w-full h-64 bg-slate-950 border border-white/10 rounded-[30px] p-6 text-white text-lg outline-none" placeholder="Seleccioná un botón..." />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-purple-500 uppercase tracking-widest">3. Adjuntar PDF o Imagen</label>
              <div className="p-4 bg-slate-950 border-2 border-dashed border-slate-800 rounded-2xl flex items-center justify-between">
                <input type="file" onChange={(e) => setArchivo(e.target.files?.[0].name || '')} className="text-xs text-slate-500" />
                <span className="text-[10px] font-bold text-slate-400 uppercase">{archivo || 'Ningún archivo'}</span>
              </div>
            </div>

            <button onClick={enviarWhatsApp} className="w-full py-8 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-[35px] text-4xl shadow-2xl transition-all uppercase italic tracking-tighter">
              LANZAR CAMPAÑA
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
