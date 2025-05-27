import { Routes, Route } from "react-router";
import { PageLayout } from "./components/PageLayout";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Pricing from "./Pages/Pricing";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";

const App = () => {
  return (
    <>
      <Routes>
        {/* Public routes with layout */}
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Standalone route (no navbar) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/barber" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
