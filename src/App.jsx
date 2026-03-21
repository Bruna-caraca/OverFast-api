import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/index";
import { HeroList } from "./pages/HeroList";
import { HeroInfo } from "./pages/HeroInfo";
import { Maps } from "./pages/Maps";
import { NotFound } from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/herois" element={<HeroList />} />
      <Route path="/herois/:heroKey" element={<HeroInfo />} />
      <Route path="/mapas" element={<Maps />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
