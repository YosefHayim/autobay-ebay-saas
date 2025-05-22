import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import ThemeProvider from "./components/ThemeProvider/ThemeProvider.tsx";
import Loader from "./components/Loader/Loader.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <StrictMode>
          <App />
        </StrictMode>
      </Suspense>
    </BrowserRouter>
  </ThemeProvider>,
);
