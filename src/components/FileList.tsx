import { ChevronDown } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

interface FileListProps {
  onFileClick: () => void;
}

const files = [
  { id: "1", name: "Drawings 2D.pdf", type: "pdf", modified: "Yesterday 1:32 PM", members: "Only you" },
  { id: "2", name: "PO_19382893.pdf", type: "pdf", modified: "Yesterday 1:32 PM", members: "Only you" },
  { id: "3", name: "Signed Contract.pdf", type: "pdf", modified: "Yesterday 1:32 PM", members: "Only you" },
  { id: "4", name: "List_of_items.xlsx", type: "excel", modified: "Yesterday 1:32 PM", members: "Only you" },
];

const FileList = ({ onFileClick }: FileListProps) => {
  const iconUrls = {
    pdf: 'https://png.pngtree.com/png-clipart/20220612/original/pngtree-pdf-file-icon-png-png-image_7965915.png',
    excel: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/119_Excel_logo_logos-512.png'
  };

  return (
    <div className="flex-1 overflow-auto">
      <table className="w-full border-collapse min-w-[800px]">
        <thead>
          <tr className="border-b border-border">
            <th className="w-12 p-3 text-left">
              <Checkbox />
            </th>
            <th className="p-3 text-left">
              <button className="flex items-center gap-1 text-sm font-medium text-foreground">
                Name <ChevronDown className="w-4 h-4" />
              </button>
            </th>
            <th className="p-3 text-left">
              <button className="flex items-center gap-1 text-sm font-medium text-foreground">
                Modified <ChevronDown className="w-4 h-4" />
              </button>
            </th>
            <th className="p-3 text-left">
              <button className="flex items-center gap-1 text-sm font-medium text-foreground">
                Members <ChevronDown className="w-4 h-4" />
              </button>
            </th>
            <th className="w-12"></th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr
              key={file.id}
              onClick={onFileClick}
              className="border-b border-border hover:bg-muted cursor-pointer transition-colors"
            >
              <td className="p-3" onClick={(e) => e.stopPropagation()}>
                <Checkbox />
              </td>
              <td className="p-3">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded flex items-center justify-center ${
                    file.type === 'pdf' ? 'bg-red-50' : 'bg-green-50'
                  }`}>
                    <img 
                      src={iconUrls[file.type as keyof typeof iconUrls]} 
                      alt={file.type}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <span className="text-sm">{file.name}</span>
                </div>
              </td>
              <td className="p-3 text-sm text-muted-foreground">{file.modified}</td>
              <td className="p-3 text-sm text-muted-foreground">{file.members}</td>
              <td className="p-3"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileList;
