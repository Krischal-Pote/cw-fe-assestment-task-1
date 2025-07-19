import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {  Search } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black border-b border-white-800">
      <div className="flex items-center gap-3" tabIndex={0}>
        <img src="/task1/logo.png" alt="Logo" className="w-10 h-10" />
        <span className="text-white font-semibold text-lg">Wortionary</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative w-[100px] sm:w-[150px] md:w-[200px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          aria-label="Header quick search"
          type="text"
          placeholder="Search" 
          onChange={() => {
            console.log("enter something");
          }}
          className="
            pl-12 
            bg-[#283038]
            text-black 
            border-none 
            focus:ring-0 
            rounded-lg 
            truncate
            text-ellipsis 
            whitespace-nowrap
            overflow-hidden
          "
        />
        </div>
        <Avatar className="w-8 h-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>KP</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
