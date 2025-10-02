import { Search, LayoutGrid } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="h-14 border-b border-border bg-background flex items-center justify-between px-6">
      <div className="flex items-center gap-4 flex-1">
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search"
              className="pl-9 bg-muted/50 border-0"
            />
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <LayoutGrid className="w-5 h-5 text-muted-foreground" />
        </Button>
      </div>
    </header>
  );
}
