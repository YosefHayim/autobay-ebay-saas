import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import ThemeProvider from "./components/ThemeProvider/ThemeProvider.tsx";
import Loader from "./components/Loader/Loader.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SignUpProvider } from "./contexts/SignupContext.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <SignUpProvider>
          <Suspense fallback={<Loader />}>
            <StrictMode>
              <App />
            </StrictMode>
          </Suspense>
        </SignUpProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </ThemeProvider>,
);
