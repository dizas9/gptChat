// import { useState } from 'react'
import "./App.css";
// import Chat from "./pages/Chat";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
        {/* <Route path="/" element={<Chat />} /> */}
      </Routes>
    </>
  );
}

export default App;
