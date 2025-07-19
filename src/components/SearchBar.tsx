import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  placeholder?: string;
}

export const SearchBar = ({
  value,
  onChange,
  onSubmit,
  placeholder = "Type to search...",
}: SearchBarProps) => {
  return (
    <div className="flex items-center bg-muted px-4 py-2 rounded-full w-full max-w-xl mt-6 shadow-md">
      <Search className="text-muted-foreground mr-3" />
      <Input
        aria-label="Search input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        placeholder={placeholder}
        className="flex-1 bg-transparent border-none text-white placeholder:text-muted-foreground focus:ring-0"
      />
      <Button
        type="button"
        onClick={onSubmit}
        className="bg-primary text-white hover:bg-primary/90 ml-4 rounded-full"
      >
        Search
      </Button>
    </div>
  );
};
