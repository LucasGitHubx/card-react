import { createContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import "./app.css";
import AboutPage from "./pages/AboutPage";
import UpgradeLevel from "./pages/UpgradeLevel";
import StatusPage from "./pages/StatusPage";

export const Context = createContext();

export default function App() {
  const [person, setPerson] = useState([]);
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardName, setCardName] = useState("Jane Appleseed");
  const [cardMonth, setCardMonth] = useState("00");
  const [cardYear, setCardYear] = useState("00");
  const [cvc, setCvc] = useState(123);
  const [modal, setModal] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Context.Provider
          value={[
            person,
            setPerson,
            cardNumber,
            setCardNumber,
            cardName,
            setCardName,
            cardMonth,
            setCardMonth,
            cardYear,
            setCardYear,
            cvc,
            setCvc,
            modal,
            setModal,
          ]}
        >
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/upgrade" element={<UpgradeLevel />} />
              <Route path="/status" element={<StatusPage />} />
            </Routes>
          </div>
        </Context.Provider>
      </BrowserRouter>
    </>
  );
}
