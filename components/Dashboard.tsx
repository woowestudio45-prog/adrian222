
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { MOCK_LEADS } from '../constants';

const DATA = [
  { name: 'Lun', val: 40 },
  { name: 'Mar', val: 65 },
  { name: 'Mie', val: 80 },
  { name: 'Jue', val: 55 },
  { name: 'Vie', val: 90 },
  { name: 'Sab', val: 30 },
  { name: 'Dom', val: 20 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 lg:p-10 space-y-8 animate-fade-in">
      <div className="flex flex-col gap-1">
        <p className="text-[#92a4c9] text-xs font-bold uppercase tracking-widest">Centro de Comando</p>
        <h2 className="text-3xl lg:text-4xl font-black text-white">Hola, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Adrián</span></h2>
        <p className="text-[#92a4c9] text-sm mt-1">Monitorea el rendimiento de tus agentes IA y el embudo de ventas.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Leads Generados', val: '1,240', inc: '+12%', icon: 'groups', color: 'primary' },
          { label: 'Conversaciones IA', val: '850', inc: '+5.2%', icon: 'forum', color: 'purple-500' },
          { label: 'Citas Agendadas', val: '18', inc: '+8.1%', icon: 'event', color: 'pink-500' },
          { label: 'Tasa de Cierre', val: '4.2%', inc: '+1.5%', icon: 'pie_chart', color: 'orange-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-background-surface p-6 rounded-2xl border border-background-highlight shadow-sm flex flex-col gap-4 group hover:border-primary/50 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 rounded-lg bg-${stat.color}/10 text-${stat.color}`}>
                <span className="material-symbols-outlined">{stat.icon}</span>
              </div>
              <span className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-black">{stat.inc}</span>
            </div>
            <div>
              <p className="text-[#92a4c9] text-xs font-bold uppercase tracking-wider">{stat.label}</p>
              <h3 className="text-3xl font-black text-white mt-1">{stat.val}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Chart */}
        <div className="lg:col-span-2 bg-background-surface rounded-2xl p-6 border border-background-highlight flex flex-col gap-6">
           <div className="flex justify-between items-center">
             <div>
               <h3 className="text-lg font-bold text-white">Rendimiento Semanal</h3>
               <p className="text-[#92a4c9] text-xs">Comparativa de interacciones por día.</p>
             </div>
             <div className="flex gap-4">
                <div className="flex items-center gap-2"><div className="size-2 bg-primary rounded-full"></div><span className="text-[10px] text-[#92a4c9] font-bold">INTERACCIONES</span></div>
             </div>
           </div>
           <div className="h-64 w-full">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={DATA}>
                 <XAxis dataKey="name" stroke="#586479" fontSize={10} axisLine={false} tickLine={false} />
                 <Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}} contentStyle={{backgroundColor: '#1a2230', borderColor: '#232f48', borderRadius: '12px', color: '#fff'}} />
                 <Bar dataKey="val" radius={[4, 4, 0, 0]}>
                   {DATA.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={index === 4 ? '#d946ef' : '#1258e2'} />
                   ))}
                 </Bar>
               </BarChart>
             </ResponsiveContainer>
           </div>
        </div>

        {/* Recent Hot Leads */}
        <div className="bg-background-surface rounded-2xl border border-background-highlight overflow-hidden flex flex-col">
          <div className="p-4 border-b border-background-highlight bg-[#111722]/30 flex justify-between items-center">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest">Hot Leads</h3>
            <button className="text-primary text-[10px] font-bold hover:underline">VER TODO</button>
          </div>
          <div className="flex-1 divide-y divide-background-highlight">
            {MOCK_LEADS.map((lead) => (
              <div key={lead.id} className="p-4 flex items-center justify-between hover:bg-background-highlight/50 transition-colors group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="size-9 rounded-full bg-gradient-to-br from-background-highlight to-background-surface border border-background-highlight flex items-center justify-center text-xs font-bold text-white">
                    {lead.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white leading-none">{lead.name}</p>
                    <p className="text-[10px] text-[#92a4c9] mt-1">{lead.car}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${lead.temp === 'Muy Alta' ? 'bg-red-500/10 text-red-500' : 'bg-orange-500/10 text-orange-500'}`}>
                    {lead.temp}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
