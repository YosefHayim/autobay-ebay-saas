import { Home } from "./Pages/Home";
import { Pricing } from "./Pages/Pricing";
import { Contact } from "./Pages/Contact";
import { SignUp } from "./Pages/SignUp";
import { Login } from "./Pages/Login";
import { About } from "./Pages/About";
import { Dashboard } from "./Pages/Dashboard";
import { Layout } from "./components/Layout/Layout";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Routes>
        {/* Public routes with layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Standalone route (no navbar) */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
