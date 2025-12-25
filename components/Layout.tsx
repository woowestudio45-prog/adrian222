
import React from 'react';
import { View } from '../types';
import { NAVIGATION } from '../constants';

interface LayoutProps {
  currentView: View;
  onViewChange: (view: View) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ currentView, onViewChange, children }) => {
  return (
    <div className="flex h-screen w-full bg-background-dark overflow-hidden">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-72 h-full border-r border-background-highlight bg-[#0b0f17] p-6 shrink-0 z-30">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="bg-gradient-to-br from-primary to-accent aspect-square rounded-xl size-10 flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-white text-2xl">smart_toy</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-xl font-extrabold leading-none tracking-wide">JEEMIA</h1>
            <p className="text-[#92a4c9] text-[10px] font-bold tracking-widest mt-1 uppercase">AI Auto Sales</p>
          </div>
        </div>

        <nav className="flex flex-col gap-1">
          {NAVIGATION.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                currentView === item.id 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'text-[#92a4c9] hover:bg-background-surface hover:text-white'
              }`}
            >
              <span className={`material-symbols-outlined text-[20px] ${currentView === item.id ? 'filled' : ''}`}>
                {item.icon}
              </span>
              <p className="text-sm font-bold">{item.label}</p>
            </button>
          ))}
        </nav>

        <div className="mt-auto space-y-4">
          <div className="p-4 rounded-xl bg-background-surface/50 border border-background-highlight flex items-center gap-3">
             <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">person</span>
             </div>
             <div className="flex flex-col overflow-hidden">
               <p className="text-white text-sm font-bold">Adrián M.</p>
               <p className="text-green-500 text-[10px] font-bold flex items-center gap-1">
                 <span className="size-1.5 rounded-full bg-green-500 animate-pulse"></span>
                 Agente Activo
               </p>
             </div>
          </div>
          <button className="flex w-full items-center justify-center gap-2 rounded-xl h-10 bg-background-surface hover:bg-background-highlight border border-background-highlight text-[#92a4c9] hover:text-white transition-colors text-sm font-bold">
            <span className="material-symbols-outlined text-[18px]">logout</span>
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <header className="h-16 border-b border-background-highlight bg-[#111722]/80 backdrop-blur-md flex items-center justify-between px-6 lg:px-10 shrink-0 z-20">
          <div className="flex items-center gap-4">
            <h2 className="text-white font-bold text-lg capitalize">{currentView.replace('_', ' ')}</h2>
          </div>
          <div className="flex items-center gap-4">
             <div className="hidden sm:flex items-center gap-2 bg-background-surface px-3 py-1.5 rounded-lg border border-background-highlight">
                <span className="text-[10px] font-bold text-[#92a4c9] uppercase">Créditos IA: 2,450</span>
             </div>
             <button className="relative p-2 text-[#92a4c9] hover:text-white transition-colors">
               <span className="material-symbols-outlined">notifications</span>
               <span className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full border-2 border-background-dark"></span>
             </button>
             <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-blue-600 text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-primary/25">
               <span className="material-symbols-outlined text-[18px]">add</span>
               Nuevo Lead
             </button>
          </div>
        </header>
        
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
