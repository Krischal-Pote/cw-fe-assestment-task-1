import { Header } from "./components/Header";
import { HeroSearch } from "./components/HeroSearch";
export default function App() {
  // the design.png background code in not there in index.css
  return (
    <main className="bg-[#121417] min-h-screen text-white">
     <Header/>
     <HeroSearch/>
    </main>
  );
}
