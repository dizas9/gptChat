import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { BrowserRouter } from "react-router-dom";
import { DrawerContext } from "./hooks/useSidebarOpen.tsx";
import { FetchResponseProvider } from "./hooks/useFetchResponse.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <FetchResponseProvider>
    <DrawerContext>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DrawerContext>
  </FetchResponseProvider>
);
