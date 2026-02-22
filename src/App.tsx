
import { Nav } from "./components/home/navbar";
import { Hero } from "./components/home/hero";
import { Story } from "./components/home/story";
import { Skills } from "./components/home/skill";
import { Gallery } from "./components/home/gallery";
import { Contact } from "./components/home/contact";
import { Footer } from "./components/home/footer";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0f] text-white overflow-x-hidden">
      <Nav />
      <Hero />
      <Story />
      <Skills />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}