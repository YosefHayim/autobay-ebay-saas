import { Route, Routes } from "react-router";
import { PrivacyPolicy } from "./Pages/Privacy";
import { Pricing } from "./Pages/Pricing";

const App = () => {
  return (
    <>
      <div className="w-full">
        <Routes>
          <Route element={<PrivacyPolicy />} path="/privacy" />
          <Route element={<Pricing />} path="/pricing" />
        </Routes>
      </div>
    </>
  );
};

export default App;
