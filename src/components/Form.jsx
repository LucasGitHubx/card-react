import { useContext, useState } from "react";
import { Context } from "../App";
import "./form.css";

export default function Form() {
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

  const [errorName, setErrorName] = useState(false);
  const [errorNumber, setErrorNumber] = useState(false);
  const [errorCvc, setErrorCvc] = useState(false);

  function handleChangeDate(e, setter) {
    if (e.target.value.length <= 2) {
      setter(e.target.value);
    }
  }

  function handleChangeNumber(e) {
    if (e.target.value.length <= 19) {
      setCardNumber(e.target.value);
    }
  }

  function handleChangeName(e) {
    if (e.target.value.length <= 18) {
      setCardName(e.target.value);
    }
  }

  function handleCvc(e) {
    if (e.target.value.length <= 3) {
      setCvc(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const regexName =
      /[A-Za-z]+\s[A-Za-z]+(\s?[A-Za-z]+)?(\s?[A-Za-z]+)?(\s?[A-Za-z]+)?/;
    const regexNumber = /\d{4}\s\d{4}\s\d{4}\s\d{4}/;
    const regexCvc = /\b(0\d{2}|[1-9]\d{2})\b/;

    if (!regexName.test(cardName)) {
      setErrorName(true);
    } else {
      setErrorName(false);
    }

    if (!regexNumber.test(cardNumber)) {
      setErrorNumber(true);
    } else {
      setErrorNumber(false);
    }

    if (!regexCvc.test(cvc)) {
      setErrorCvc(true);
    } else {
      setErrorCvc(false);
    }

    if (
      regexCvc.test(cvc) &&
      regexName.test(cardName) &&
      regexNumber.test(cardNumber)
    ) {
      setPerson((prev) => {
        return [
          ...prev,
          { id: crypto.randomUUID(), name: cardName, number: cardNumber },
        ];
      });
      setCardName("Jane Appleseed");
      setCardNumber("0000 0000 0000 0000");
      setCardMonth("00");
      setCardYear("00");
      setCvc(123);
      setModal(true);
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="name">Cardholder name</label>
      <p className={errorName ? "active" : undefined}>
        Is your name well spelled?
      </p>
      <input
        type="text"
        placeholder="e.g Jane Appleseed"
        id="name"
        onChange={(e) => {
          handleChangeName(e);
        }}
        value={cardName}
        className={errorName ? "active" : undefined}
        required
      />
      <label htmlFor="number">Card number</label>
      <p className={errorNumber ? "active" : undefined}>
        It must be in the next form: xxxx xxxx xxxx xxxx
      </p>
      <input
        type="text"
        placeholder="e.g 1234 5678 9123 0000"
        id="number"
        onChange={(e) => {
          handleChangeNumber(e);
        }}
        value={cardNumber}
        className={errorNumber ? "active" : undefined}
        required
      />
      <label htmlFor="mm">Exp. Date (MM/YY)</label>
      <section id="mm">
        <input
          type="number"
          placeholder="MM"
          min={1}
          max={12}
          onChange={(e) => {
            handleChangeDate(e, setCardMonth);
          }}
          value={cardMonth}
          required
        />
        <input
          type="number"
          placeholder="YY"
          min={0}
          max={99}
          onChange={(e) => {
            handleChangeDate(e, setCardYear);
          }}
          value={cardYear}
          required
        />
      </section>
      <label htmlFor="cvc">cvc</label>
      <p className={errorCvc ? "active" : undefined}>
        It must go from 000 to 999
      </p>
      <input
        type="number"
        placeholder="e.g 123"
        id="cvc"
        onChange={(e) => {
          handleCvc(e);
        }}
        value={cvc}
        className={errorCvc ? "active" : undefined}
        required
      />
      <button>confirm</button>
    </form>
  );
}
