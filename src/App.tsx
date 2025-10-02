import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import FileList from '@/components/FileList';
import ActionPanel from '@/components/ActionPanel';
import EmailModal from '@/components/EmailModal';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFileClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="flex h-screen overflow-hidden bg-background">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Header />
          <div className="flex flex-1 overflow-hidden">
            <FileList onFileClick={handleFileClick} />
            <ActionPanel />
          </div>
        </div>
      </div>
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Toaster />
    </>
  );
}

export default App;
