import { Route, Routes } from "react-router";
import { PrivacyPolicy } from "./Pages/Privacy";

const App = () => {
  return (
    <>
      <div className="w-full">
        <Routes>
          <Route element={<PrivacyPolicy />} path="/privacy" />
        </Routes>
      </div>
    </>
  );
};

export default App;
