import { FileText, MoreHorizontal, ChevronDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface FileItem {
  id: string;
  name: string;
  type: "pdf" | "excel";
  modified: string;
  members: string;
}

const files: FileItem[] = [
  { id: "1", name: "Drawings 2D.pdf", type: "pdf", modified: "Yesterday 1:32 PM", members: "Only you" },
  { id: "2", name: "PO_19382893.pdf", type: "pdf", modified: "Yesterday 1:32 PM", members: "Only you" },
  { id: "3", name: "Signed Contract.pdf", type: "pdf", modified: "Yesterday 1:32 PM", members: "Only you" },
  { id: "4", name: "List_of_items.xlsx", type: "excel", modified: "Yesterday 1:32 PM", members: "Only you" },
];

export function FileList() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="min-w-max">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="w-12 py-3">
                <Checkbox className="mx-auto" />
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-foreground">
                <button className="flex items-center gap-1 hover:text-primary transition-colors">
                  Name
                  <ChevronDown className="w-4 h-4" />
                </button>
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-foreground min-w-[200px]">
                <button className="flex items-center gap-1 hover:text-primary transition-colors">
                  Modified
                  <ChevronDown className="w-4 h-4" />
                </button>
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-foreground min-w-[150px]">
                <button className="flex items-center gap-1 hover:text-primary transition-colors">
                  Members
                  <ChevronDown className="w-4 h-4" />
                </button>
              </th>
              <th className="w-16 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {files.map((file) => (
              <tr
                key={file.id}
                className="border-b border-border hover:bg-muted/50 transition-colors group"
              >
                <td className="py-3">
                  <Checkbox className="mx-auto" />
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded flex items-center justify-center ${
                        file.type === "pdf" ? "bg-red-100" : "bg-green-100"
                      }`}
                    >
                      <FileText
                        className={`w-5 h-5 ${
                          file.type === "pdf" ? "text-red-600" : "text-green-600"
                        }`}
                      />
                    </div>
                    <span className="text-sm text-foreground">{file.name}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-muted-foreground">
                  {file.modified}
                </td>
                <td className="py-3 px-4 text-sm text-muted-foreground">
                  {file.members}
                </td>
                <td className="py-3 px-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
