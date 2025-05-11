import { Route, Routes } from "react-router";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Contact from "./Pages/Contact/Contact";
import { Pricing } from "./Pages/Pricing/Pricing";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
