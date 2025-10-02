import { Cloud, File, Share2, Users, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeItem?: string;
}

const navigationItems = [
  { id: "files", label: "Files", icon: File },
  { id: "shared", label: "Shared", icon: Share2 },
  { id: "my-files", label: "My files", icon: Users },
  { id: "file-requests", label: "File requests", icon: File },
  { id: "deleted", label: "Deleted files", icon: Trash2 },
];

export function Sidebar({ activeItem = "files" }: SidebarProps) {
  return (
    <aside className="w-56 border-r border-border bg-background h-screen flex flex-col">
      <div className="p-6 flex items-center gap-2">
        <Cloud className="w-10 h-10 text-primary" fill="currentColor" />
        <h1 className="text-2xl font-normal">OneDrive</h1>
      </div>
      
      <nav className="flex-1 px-3">
        <ul className="space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === activeItem;
            
            return (
              <li key={item.id}>
                <button
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                    isActive
                      ? "bg-accent text-accent-foreground font-medium"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
