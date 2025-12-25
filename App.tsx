
import React, { useState } from 'react';
import { View } from './types';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import AudioStudio from './components/AudioStudio';
import ImageStudio from './components/ImageStudio';
import MessageStudio from './components/MessageStudio';
import DataStudio from './components/DataStudio';
import Settings from './components/Settings';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.DASHBOARD);

  const renderView = () => {
    switch (currentView) {
      case View.DASHBOARD: return <Dashboard />;
      case View.AUDIO_STUDIO: return <AudioStudio />;
      case View.IMAGE_STUDIO: return <ImageStudio />;
      case View.MESSAGING: return <MessageStudio />;
      case View.DATABASE: return <DataStudio />;
      case View.SETTINGS: return <Settings />;
      default: return <Dashboard />;
    }
  };

  return (
    <Layout currentView={currentView} onViewChange={setCurrentView}>
      {renderView()}
    </Layout>
  );
};

export default App;
