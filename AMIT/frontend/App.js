import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import RoutesPage from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark text-white">
        <Navbar />
        <div className="p-5">
          <RoutesPage />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
