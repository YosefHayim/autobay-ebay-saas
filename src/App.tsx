import { Route, Routes } from "react-router";
import { Home } from "./Pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Pricing } from "./Pages/Pricing";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
