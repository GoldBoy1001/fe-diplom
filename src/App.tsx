import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import TrainSelection from "./pages/trainSelection/trainSelection";
import Passengers from "./pages/passengers";
import TicketPayment from "./pages/ticketPayment";
import Check from "./pages/check";
import SuccessfulOrder from "./pages/successfulOrder";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/train" element={<TrainSelection />} />
          <Route path="/passengers" element={<Passengers />} />
          <Route path="/payment" element={<TicketPayment />} />
          <Route path="/check" element={<Check />} />
          <Route path="/order" element={<SuccessfulOrder />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
