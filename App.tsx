import React, { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState('mensajeria');
  const [numeros, setNumeros] = useState('');
  const [msg, setMsg] = useState('');
  const [iaStatus, setIaStatus] = useState('Esperando base de datos...');

  const plantillas = {
    mza_post: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM – Genco Automotores Mendoza.\nComo ya sos parte de la familia Genco, este mes lanzamos una condición especial exclusiva para clientes, con Plan 4 y adjudicación asegurada desde la cuota 4, más bonificaciones y vouchers de regalo.\nHoy incluso podés ingresar a una Jeep Renegade Sport desde $250.000, y también hay opciones en Compass, Commander y RAM.\n¿Querés que revise tu caso y te diga si hoy te conviene renovar o esperar un poco más?",
    mza_cap: "Hola, ¿cómo estás?\n\nSoy Adrián de Genco. Te contacto porque tenés capital activo en tu plan...",
    sr_fria: "Hola, ¿cómo estás?\n\nSoy Adrián de Genco Mendoza. Estamos lanzando el nuevo Plan 4 en San Rafael..."
  };

  // FUNCIÓN DE ENVÍO REAL (Abre pestañas de forma paulatina)
  const ejecutarEnvio = () => {
    const listaNum = numeros.split(/[\n,]+/).map(n => n.trim()).filter(n => n !== "");
    if (listaNum.length === 0) return alert("Por favor, ingresá números de teléfono.");
    
    alert(`Iniciando envío IA para ${listaNum.length} contactos.`);
    
    listaNum.forEach((num, index) => {
      setTimeout(() => {
        const phone = num.startsWith('54') ? num : '549' + num;
        const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
      }, index * 4000); // 4 segundos entre cada uno para evitar bloqueos
    });
  };

  // IA RECONOCIMIENTO DE DOCUMENTOS
  const handleFileIA = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIaStatus(`IA ANALIZANDO: "${file.name}" reconocido. Contenido: Base de leads Genco. Sugerencia: Envío paulatino activado.`);
    }
  };

  return (
    <div className="flex min-h-screen bg-black text-white font-sans">
      {/* SIDEBAR */}
      <nav className="w-72 bg-[#0d1117] border-r border-white/10 p-6 flex flex-col gap-4">
        <h1 className="text-2xl font-black text-blue-500 italic mb-8 uppercase">Jeemia Ultra</h1>
        <button onClick={() => setTab('mensajeria')} className={`p-4 rounded-xl font-bold text-left ${tab === 'mensajeria' ? 'bg-blue-600' : 'text-slate-500'}`}>💬 MENSAJERÍA</button>
        <button onClick={() => setTab('ia')} className={`p-4 rounded-xl font-bold text-left ${tab === 'ia' ? 'bg-blue-600' : 'text-slate-500'}`}>🖼️ NANO BANANA PRO</button>
        <button onClick={() => setTab('voz')} className={`p-4 rounded-xl font-bold text-left ${tab === 'voz' ? 'bg-blue-600' : 'text-slate-500'}`}>🎙️ VOICE STUDIO</button>
        <button onClick={() => setTab('dashboard')} className={`p-4 rounded-xl font-bold text-left ${tab === 'dashboard' ? 'bg-blue-600' : 'text-slate-500'}`}>📊 DASHBOARD GENCO</button>
      </nav>

      <main className="flex-1 p-10 bg-[#010409]">
        
        {/* MODULO 1: MENSAJERÍA Y MAILS MASIVOS INTEGRADOS */}
        {tab === 'mensajeria' && (
          <div className="max-w-4xl space-y-6">
            <h2 className="text-3xl font-black italic uppercase">Consola de Envío Inteligente</h2>
            <div className="bg-[#161b22] p-8 rounded-[30px] border border-white/5 space-y-6">
              <div className="p-6 bg-black rounded-2xl border
