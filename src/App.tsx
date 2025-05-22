import { Home } from "./Pages/Home";
import { Pricing } from "./Pages/Pricing";
import { Contact } from "./Pages/Contact";
import { SignUp } from "./Pages/SignUp";
import { Login } from "./Pages/Login";
import { About } from "./Pages/About";
import { Dashboard } from "./components/Dashboard";
import { Routes, Route } from "react-router";
import { PageLayout } from "./components/PageLayout";

function App() {
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
      </Routes>
    </>
  );
}

export default App;
