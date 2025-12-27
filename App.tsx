import React, { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState('mensajeria');
  const [numeros, setNumeros] = useState('');
  const [msg, setMsg] = useState('');
  const [fileInfo, setFileInfo] = useState('Ningún archivo cargado');

  const plantillas = {
    mza_cap: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de ventas especiales de Jeep y RAM en Genco Automotores Mendoza.\nTe contacto porque sos cliente Genco y hoy tenés capital activo...",
    mza_post: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM – Genco Automotores Mendoza.\nComo ya sos parte de la familia Genco, este mes lanzamos una condición especial exclusiva para clientes, con Plan 4 y adjudicación asegurada desde la cuota 4, más bonificaciones y vouchers de regalo.\nHoy incluso podés ingresar a una Jeep Renegade Sport desde $250.000, y también hay opciones en Compass, Commander y RAM.\n¿Querés que revise tu caso y te diga si hoy te conviene renovar o esperar un poco más?",
    mza_fria: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM en Genco Automotores Mendoza...",
    sr_fria: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM – Genco Automotores Mendoza..."
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileInfo(`Archivo "${file.name}" reconocido por IA. Sugerencia: Envío paulatino (15/min)`);
      alert("IA reconociendo documento... Automatización lista.");
    }
  };

  const enviarMasivo = () => {
    const lista = numeros.split(',').map(n => n.trim());
    if(!lista[0]) return alert("Cargá números antes de enviar");
    lista.forEach((num, i) => {
      setTimeout(() => {
        const fNum = num.replace(/\D/g, '').startsWith('54') ? num : '549' + num;
        window.open(`https://api.whatsapp.com/send?phone=${fNum}&text=${encodeURIComponent(msg)}`, '_blank');
      }, i * 3000); // Envío con delay para evitar bloqueos
    });
  };

  return (
    <div className="flex min-h-screen bg-[#010409] text-white">
      <nav className="w-80 bg-[#0d1117] border-r border-white/10 p-8 flex flex-col gap-3">
        <h1 className="text-2xl font-black text-blue-500 italic mb-10">JEEMIA ULTRA GOLD</h1>
        <button onClick={() => setTab('mensajeria')} className={`p-4 rounded-xl font-bold text-left ${tab === 'mensajeria' ? 'bg-blue-600' : 'text-slate-500'}`}>💬 MENSAJERÍA DIRECTA</button>
        <button onClick={() => setTab('ia')} className={`p-4 rounded-xl font-bold text-left ${tab === 'ia' ? 'bg-blue-600' : 'text-slate-500'}`}>🖼️ NANO BANANA PRO</button>
        <button onClick={() => setTab('voz')} className={`p-4 rounded-xl font-bold text-left ${tab === 'voz' ? 'bg-blue-600' : 'text-slate-500'}`}>🎙️ VOICE STUDIO</button>
        <button onClick={() => setTab('mail')} className={`p-4 rounded-xl font-bold text-left ${tab === 'mail' ? 'bg-blue-600' : 'text-slate-500'}`}>✉️ MAILS IA</button>
        <button onClick={() => setTab('dashboard')} className={`p-4 rounded-xl font-bold text-left ${tab === 'dashboard' ? 'bg-blue-600' : 'text-slate-500'}`}>📊 DASHBOARD</button>
      </nav>

      <main className="flex-1 p-12">
        {tab === 'mensajeria' && (
          <div className="max-w-4xl space-y-6">
            <h2 className="text-4xl font-black italic uppercase">Consola Genco</h2>
            <div className="bg-[#161b22] p-8 rounded-[30px] border border-white/5 space-y-6">
              <textarea value={numeros} onChange={(e)=>setNumeros(e.target.value)} className="w-full h-24 bg-black border border-white/10 rounded-2xl p-4 text-blue-400 font-mono" placeholder="Números (coma)..." />
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => setMsg(plantillas.mza_cap)} className="p-4 bg-blue-900/40 border border-blue-500 rounded-xl text-[10px] font-black italic uppercase">📍 MZA CAPITAL</button>
                <button onClick={() => setMsg(plantillas.mza_post)} className="p-4 bg-purple-900/40 border border-purple-500 rounded-xl text-[10px] font-black italic uppercase">
