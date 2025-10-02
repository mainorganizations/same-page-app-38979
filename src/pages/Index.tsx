import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { FileList } from "@/components/FileList";
import { ActionPanel } from "@/components/ActionPanel";

const Index = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar activeItem="files" />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <div className="flex-1 flex overflow-hidden">
          <FileList />
          <ActionPanel />
        </div>
      </div>
    </div>
  );
};

export default Index;
