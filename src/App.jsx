import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import About from "./components/About";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Page Not found</h1>} />
      </Routes>
      {/* <div>
        <Navbar />
        <Hero />
        <Analytics />
      </div> */}
    </>
  );
}

export default App;
