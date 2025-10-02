import { Search, Grid } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-14 border-b border-border flex items-center justify-between px-6">
      <div className="flex-1 max-w-xl relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="search"
          className="w-full pl-10 pr-4 py-2 rounded-md bg-muted text-sm border-0 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Search"
        />
      </div>
      <button className="p-2 hover:bg-muted rounded-md transition-colors">
        <Grid className="w-5 h-5" />
      </button>
    </header>
  );
};

export default Header;
