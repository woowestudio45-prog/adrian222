
import { NavItem, View } from './types';

export const NAVIGATION: NavItem[] = [
  { id: View.DASHBOARD, label: 'Dashboard', icon: 'dashboard' },
  { id: View.MESSAGING, label: 'Mensajería IA', icon: 'chat' },
  { id: View.AUDIO_STUDIO, label: 'Audio Studio', icon: 'graphic_eq' },
  { id: View.IMAGE_STUDIO, label: 'Editor Imágenes', icon: 'palette' },
  { id: View.DATABASE, label: 'Base de Datos', icon: 'database' },
  { id: View.SETTINGS, label: 'Configuración', icon: 'settings' },
];

export const MOCK_LEADS = [
  { id: '1', name: 'Carlos Mendoza', phone: '+52 55 1234 5678', car: 'Mazda CX-5 2024', status: 'Cita Agendada', temp: 'Alta' },
  { id: '2', name: 'Ana Garcia', phone: '+52 55 9876 5432', car: 'Toyota RAV4 Hybrid', status: 'Solicitó Cotización', temp: 'Media' },
  { id: '3', name: 'Roberto Gomez', phone: '+52 81 2233 4455', car: 'Kia Sportage 2024', status: 'Pre-aprobado', temp: 'Muy Alta' },
];
