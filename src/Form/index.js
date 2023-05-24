import React, { useState } from "react";
import Span from "./Span";
import Result from "./Result";
import DateAndHour from "./Date";
import { currencies } from "./currencies";
import "./index.css";

const Form = () => {
    const [moneyHeld, setMoneyHeld] = useState("");
    const [currencyHeld, setCurrencyHeld] = useState(currencies[0].id);
    const [currencyWanted, setCurrencyWanted] = useState(currencies[0].id);
    const [result, setResult] = useState(undefined);

    const onSetCurrencyHeld = ({ target }) => setCurrencyHeld(target.value);
    const onSetCurrencyWanted = ({ target }) => setCurrencyWanted(target.value);

    const getResult = (currencies, moneyHeld, currencyHeld, currencyWanted) => {
        const currencyHeldRatio = currencies.find(({ id }) => id === currencyHeld).ratio;
        const currencyWantedRatio = currencies.find(({ id }) => id === currencyWanted).ratio;

        setResult(
            {
                currencyHeld: currencyHeld,
                currencyHeldRatio: currencyHeldRatio,
                currencyWantedRatio: currencyWantedRatio,
                moneyHeld: +moneyHeld,
                currencyWanted: currencyWanted,
                resultCalc: moneyHeld * currencyHeldRatio / currencyWantedRatio,
            });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        getResult(currencies, moneyHeld, currencyHeld, currencyWanted);
    };

    return (
        <form onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset form__border">
                <legend className="form__legend form__border">
                    Currency calculator
                </legend>
                <label>
                    <DateAndHour />
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
                    <Span text="Choose the currency you want &nbsp;:&nbsp; " />
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
            <button
                className="form__button"
                onClick={() => getResult(currencies, moneyHeld, currencyHeld, currencyWanted)}
            >
                Calculate
            </button>
        </form>
    )
};

export default Form;