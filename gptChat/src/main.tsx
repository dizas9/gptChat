import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { DrawerContext } from "./hooks/useSidebarOpen.tsx";
import { FetchResponseProvider } from "./hooks/useFetchResponse.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <FetchResponseProvider>
    <DrawerContext>
      <React.StrictMode>
        <App />
        <ToastContainer/>
      </React.StrictMode>
    </DrawerContext>
  </FetchResponseProvider>
);
