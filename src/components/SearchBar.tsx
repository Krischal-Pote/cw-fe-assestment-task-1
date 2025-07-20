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

  const handleInputChange = (e:any) => {
    onChange(e.target.value);
    console.log("Input changed:", e.target.value);
  };

  const handleButtonClick = () => {
    if (value.trim()) {
        alert(`You have searched: "${value}"`);
        onSubmit
      }
  };
  return (
    <div className="flex items-center bg-[#1C2126] px-4 py-2 rounded-[var(--radius-lg)] w-full max-w-xl mt-6 shadow-md">
      <Search className="text-muted-foreground mr-3"/>
      <Input
        aria-label="Search input"
        value={value}
        onChange={handleInputChange}
        type="text"
        placeholder={placeholder}
        className="flex-1 bg-transparent border-none outline-none text-[var(--input)] placeholder:text-[var(--muted-foreground)] focus:ring-0"
      />
     <Button
        type="button"
        aria-label="Search Button"
        onClick={handleButtonClick}
        className="bg-[#1980E5] text-white hover:bg-[#1565C0] hover:shadow-lg active:bg-[#0D47A1] ml-4 rounded-[var(--radius-lg)] cursor-pointer transition-all duration-200 transform hover:scale-105 active:scale-95"
      >
        Search
      </Button>
    </div>
  );
};
