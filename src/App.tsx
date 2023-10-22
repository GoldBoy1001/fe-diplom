import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import TrainSelection from "./pages/trainSelection/trainSelection";
import Passengers from "./pages/passengers/passengers";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/train" element={<TrainSelection />} />
          <Route path="/passengers" element={<Passengers />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
