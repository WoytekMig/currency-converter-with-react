import React, { useState } from "react";
import Span from "../Span";
import Result from "../Result";
import { currencies } from "../currencies";
import "./index.css";

const Form = () => {
    const [moneyHeld, setMoneyHeld] = useState(1);
    const [currencyHeld, setCurrencyHeld] = useState(currencies[0].id);
    const [currencyWanted, setCurrencyWanted] = useState(currencies[0].id);
    const [result, setResult] = useState(1);

    const onSetCurrencyHeld = ({ target }) => setCurrencyHeld(target.value);
    const onSetCurrencyWanted = ({ target }) => setCurrencyWanted(target.value);

    const getResult = (currencies, moneyHeld, currencyHeld, currencyWanted) => {
        const currencyHeldRatio = currencies.find(({ id }) => id === currencyHeld).ratio;
        const currencyWantedRatio = currencies.find(({ id }) => id === currencyWanted).ratio;

        setResult(
            {
                currencyHeld: currencyHeld,
                cHeldRatio: currencyHeldRatio,
                cWantedRatio: currencyWantedRatio,
                mHeld: moneyHeld,
                cWanted: currencyWanted,
                resultCalc: moneyHeld * currencyHeldRatio / currencyWantedRatio,
            });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        getResult(currencies, moneyHeld, currencyHeld, currencyWanted);
    };

    return (
        <form onSubmit={onFormSubmit}>
            <fieldset className="form">
                <legend className="form__legend">
                    Currency calculator
                </legend>
                <label>
                    <Span text="Complete how much in  &nbsp;" />
                    <select
                        value={currencyHeld}
                        onChange={onSetCurrencyHeld}
                    >
                        {currencies.map((currency => (
                            <option
                                key={currency.ratio}
                                value={currency.id}
                            >
                                {currency.id}
                            </option>
                        )))}
                    </select>
                    <Span text="do you have :" />
                    <input
                        type="number"
                        value={moneyHeld}
                        onChange={({ target }) => setMoneyHeld(target.value)}
                        className="form__input"
                        min="0"
                        step="0.01"
                        required
                        placeholder="Write here..." />
                    <Span text="Choose the currency you want : &nbsp;" />
                    <select
                        value={currencyWanted}
                        onChange={onSetCurrencyWanted}
                    >
                        {currencies.map((currencyWanted => (
                            <option
                                key={currencyWanted.ratio}
                                value={currencyWanted.id}
                            >
                                {currencyWanted.id}
                            </option>
                        )))}
                    </select>

                    <Result result={result} />

                </label>
            </fieldset>
            <div className="form__buttonDiv">
                <button
                    className="form__button"
                    onClick={() => getResult(currencies, moneyHeld, currencyHeld, currencyWanted)}
                >
                    Calculate
                </button>
            </div>
        </form>
    )
};

export default Form;