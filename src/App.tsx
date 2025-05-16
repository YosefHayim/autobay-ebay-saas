import { Route, Routes } from "react-router";
import { Home } from "./Pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Pricing } from "./Pages/Pricing";
import { Contact } from "./Pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
