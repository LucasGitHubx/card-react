import { useContext } from "react";
import { Context } from "../App";

import "./card.css";

export default function Card() {
  const [
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
  ] = useContext(Context);

  return (
    <div className="cards">
      <div className="card front-card">
        <div className="logo">
          <div className="circle big-circle"></div>
          <div className="circle small-circle"></div>
        </div>
        <div className="information">
          <div className="number">
            <h2>{cardNumber}</h2>
          </div>
          <div className="name-exp">
            <div className="name">
              <p>{cardName}</p>
            </div>
            <div className="exp">
              <p>
                {cardMonth}/{cardYear}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card back-card">
        <div className="line"></div>
        <div className="cvc-space">
          <p>{cvc}</p>
        </div>
      </div>
    </div>
  );
}
