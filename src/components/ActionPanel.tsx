import { Upload, FolderPlus, Share2, Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";

const actions = [
  { id: "upload-files", label: "Upload files", icon: Upload },
  { id: "upload-folder", label: "Upload folder", icon: FolderPlus },
  { id: "new-folder", label: "New folder", icon: FolderPlus },
  { id: "shared-folder", label: "New shared folder", icon: Share2 },
  { id: "request-files", label: "Request files", icon: Inbox },
];

export function ActionPanel() {
  return (
    <aside className="w-64 border-l border-border bg-background p-6 flex flex-col gap-2">
      <p className="text-sm text-muted-foreground mb-4">
        Select a file to see more details
      </p>
      
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <Button
            key={action.id}
            variant="ghost"
            className="justify-start gap-2 text-primary hover:text-primary hover:bg-accent"
          >
            <Icon className="w-4 h-4" />
            {action.label}
          </Button>
        );
      })}
    </aside>
  );
}
