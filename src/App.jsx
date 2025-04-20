import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/index";
import { HeroList } from "./pages/HeroList";
import { HeroInfo } from "./pages/HeroInfo";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/herois" element={<HeroList />} />
      <Route path="/herois/:heroKey" element={<HeroInfo />} />
    </Routes>
  );
}
