import { Route, Routes } from "react-router";
import { Home } from "./Pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Pricing } from "./Pages/Pricing";
import { Contact } from "./Pages/Contact";
import { SignUp } from "./Pages/SignUp";
import { Login } from "./Pages/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
