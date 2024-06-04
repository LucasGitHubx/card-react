import { useContext, useState } from "react";
import { Context } from "../App";
import Form from "../components/Form";
import Card from "../components/Card";

import "./upgradeLevel.css";

export default function UpgradeLevel() {
  // const [modal, setModal] = useContext(Context);
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
    modal,
    setModal,
  ] = useContext(Context);
  function handleModal(e) {
    e.preventDefault();
    setModal(false);
  }

  return (
    <>
      <div className={modal ? "modal active" : "modal"}>
        <p>User updated successfully</p>
        <button onClick={(e) => handleModal(e)}>x</button>
      </div>
      <div className="upgrade">
        <Card />
        <Form />
      </div>
    </>
  );
}
