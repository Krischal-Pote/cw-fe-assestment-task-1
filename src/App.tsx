import { Header } from "./components/Header";
import { HeroSearch } from "./components/HeroSearch";
import { TagList } from "./components/TagList";
export default function App() {
  // the design.png background code in not there in index.css
   const tags = ["NFT", "Metaverse", "Sustainable", "Sonder", "FOMO", "Ghosting"];
  return (
    
    <main className="bg-[#121417] min-h-[130vh] text-white pb-16">
     <Header/>
     <HeroSearch/>
      <TagList title="Trending" tags={tags} />
      <TagList title="For you" tags={tags} />
    </main>
  );
}
