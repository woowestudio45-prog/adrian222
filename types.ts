
export enum View {
  DASHBOARD = 'dashboard',
  AUDIO_STUDIO = 'audio_studio',
  IMAGE_STUDIO = 'image_studio',
  MESSAGING = 'messaging',
  DATABASE = 'database',
  SETTINGS = 'settings'
}

export interface NavItem {
  id: View;
  label: string;
  icon: string;
}

export interface KPIStats {
  leads: number;
  conversations: number;
  appointments: number;
  closeRate: string;
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  car: string;
  status: 'Cita Agendada' | 'Solicitó Cotización' | 'Pre-aprobado' | 'Respondió' | 'No Respondió';
  temp: 'Alta' | 'Media' | 'Baja' | 'Muy Alta';
}
