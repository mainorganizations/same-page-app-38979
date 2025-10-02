import { FileText, Upload, Users, Trash2 } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-56 border-r border-border bg-background flex flex-col">
      <div className="p-6 flex items-center gap-2">
        <img 
          src="https://m.media-amazon.com/images/I/51fBoQXGnIL.png" 
          alt="OneDrive" 
          className="w-10 h-10"
        />
        <h1 className="text-2xl font-normal">OneDrive</h1>
      </div>
      <nav className="flex-1 px-3">
        <ul className="space-y-1">
          <li>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md bg-accent text-accent-foreground font-medium text-sm transition-colors">
              <FileText className="w-4 h-4" />
              Files
            </button>
          </li>
          <li>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground text-sm transition-colors">
              <Upload className="w-4 h-4" />
              Shared
            </button>
          </li>
          <li>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground text-sm transition-colors">
              <Users className="w-4 h-4" />
              My files
            </button>
          </li>
          <li>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground text-sm transition-colors">
              <FileText className="w-4 h-4" />
              File requests
            </button>
          </li>
          <li>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground text-sm transition-colors">
              <Trash2 className="w-4 h-4" />
              Deleted files
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
