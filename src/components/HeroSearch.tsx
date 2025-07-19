import { SearchBar } from "@/components/SearchBar";
import { useState } from "react";

export function HeroSearch() {
  const [query, setQuery] = useState("");

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden mt-8 ">
      <img
        src="/task1/hero-bg.png"
        alt="Decorative background"
        className="w-full h-120 object-cover"
      />
      <div className="absolute inset-0  flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white max-w-2xl">
          Search for words, phrases and meanings
        </h1>
        <SearchBar
          value={query}
          onChange={setQuery}
          onSubmit={() => console.log("Searching for:", query)}
        />
      </div>
    </div>
  );
}
