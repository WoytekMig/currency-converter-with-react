import React, { useState } from "react";
import Span from "./Span";
import Result from "./Result";
import Clock from "./Clock";
import { currencies } from "./currencies";
import { Button, Fieldset, Input, Legend, Loading, LoadingBar, Failure, Source } from "./styled";
import { useRatesData, requestURL } from "../useRatesData";

const Form = () => {
    const [moneyHeld, setMoneyHeld] = useState("");
    const [currencyHeld, setCurrencyHeld] = useState(currencies[0].id);
    const [currencyWanted, setCurrencyWanted] = useState(currencies[1].id);
    const [result, setResult] = useState(undefined);
    const ratesData = useRatesData();

    const onSetCurrencyHeld = ({ target }) => setCurrencyHeld(target.value);
    const onSetCurrencyWanted = ({ target }) => setCurrencyWanted(target.value);

    const getResult = (useRatesData, moneyHeld, currencyHeld, currencyWanted) => {
        const currencyHeldRatio = ratesData.rates[currencyHeld];
        const currencyWantedRatio = ratesData.rates[currencyWanted];

        setResult(
            {
                currencyHeld: currencyHeld,
                currencyHeldRatio: currencyHeldRatio,
                currencyWantedRatio: currencyWantedRatio,
                moneyHeld: +moneyHeld,
                currencyWanted: currencyWanted,
                resultCalc: moneyHeld * currencyWantedRatio / currencyHeldRatio,
            });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        getResult(currencies, moneyHeld, currencyHeld, currencyWanted);
    };

    return (
        <form onSubmit={onFormSubmit}>
            <Fieldset>
                <Legend>
                    Currency calculator
                </Legend>
                <label>
                    <Clock />
                    {ratesData.status === "loading" ? (
                        <Loading>
                            <p>We're getting current data...</p>
                            <LoadingBar />
                        </Loading>
                    )
                        : ratesData.status === "error" ? (
                            <Failure>
                                Something went wrong. Check your internet connection and try again.
                            </Failure>
                        ) :
                            (
                                <>
                                    <Span text="Choose the currency you held:   &nbsp;" />
                                    <select
                                        value={currencyHeld}
                                        onChange={onSetCurrencyHeld}
                                    >
                                        {Object.keys(ratesData.rates).map((currencyHeld => (
                                            <option
                                                key={currencyHeld}
                                                value={currencyHeld}
                                            >
                                                {currencyHeld}
                                            </option>
                                        )))}
                                    </select>
                                    <Span text="Choose the currency you want: &nbsp; " />
                                    <select
                                        value={currencyWanted}
                                        onChange={onSetCurrencyWanted}
                                    >
                                        {Object.keys(ratesData.rates).map((currencyWanted => (
                                            <option
                                                key={currencyWanted}
                                                value={currencyWanted}
                                            >
                                                {currencyWanted}
                                            </option>
                                        )))}
                                    </select>
                                    <Span text="Enter the amount you have:" />
                                    <Input
                                        type="number"
                                        value={moneyHeld}
                                        onChange={({ target }) => {
                                            target.value >= 0 ? (setMoneyHeld(target.value))
                                            : alert('We cannot exchange your debts ;)')
                                        }}
                                        min="0"
                                        step="0.01"
                                        required
                                        placeholder="Write here..." />

                                    <Result result={result} />
                                    <Source>
                                        Data came from https://api.exchangerate.host,
                                    </Source>
                                    <Source>
                                        valid as of a day: <b>{ratesData.date}</b>
                                    </Source>
                                </>
                            )
                    }
                </label>
            </Fieldset>

            <Button
                onClick={() => getResult(currencies, moneyHeld, currencyHeld, currencyWanted)}
            >
                Calculate
            </Button>
        </form>
    )
};

export default Form;