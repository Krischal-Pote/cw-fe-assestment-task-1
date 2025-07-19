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
    <div className="flex items-center bg-[#1C2126] px-4 py-2 rounded-[var(--radius-lg)] w-full max-w-xl mt-6 shadow-md">
      <Search className="text-muted-foreground mr-3" />
      <Input
        aria-label="Search input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        placeholder={placeholder}
        className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-[var(--muted-foreground)] focus:ring-0"
      />
      <Button
        type="button"
        onClick={onSubmit}
        className="bg-[#1980E5] text-white hover:bg-primary/90 ml-4 rounded-[var(--radius-lg)] "
      >
        Search
      </Button>
    </div>
  );
};
