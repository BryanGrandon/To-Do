import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TodoContextProvider } from "./context/todo-context.tsx";
import App from "./App.tsx";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </StrictMode>
);
