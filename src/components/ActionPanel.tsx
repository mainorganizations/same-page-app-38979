import { Upload, Folder, FolderPlus, Calendar } from 'lucide-react';

const ActionPanel = () => {
  return (
    <aside className="w-64 border-l border-border p-6 flex flex-col gap-2">
      <p className="text-sm text-muted-foreground mb-4">Select a file to see more details</p>
      <button className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-primary hover:bg-accent text-sm transition-colors">
        <Upload className="w-4 h-4" />
        Upload files
      </button>
      <button className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-primary hover:bg-accent text-sm transition-colors">
        <Upload className="w-4 h-4" />
        Upload folder
      </button>
      <button className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-primary hover:bg-accent text-sm transition-colors">
        <Folder className="w-4 h-4" />
        New folder
      </button>
      <button className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-primary hover:bg-accent text-sm transition-colors">
        <FolderPlus className="w-4 h-4" />
        New shared folder
      </button>
      <button className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-primary hover:bg-accent text-sm transition-colors">
        <Calendar className="w-4 h-4" />
        Request files
      </button>
    </aside>
  );
};

export default ActionPanel;
