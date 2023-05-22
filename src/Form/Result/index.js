import React from "react";
import Span from "../Span";

const Result = ({ result }) => (

    <div>
        {result !== undefined && (
            <>
                <Span text="Your calculation will look like :&nbsp;" />
                <strong className="form__result">
                    {result.moneyHeld.toFixed(2)}&nbsp; {result.currencyHeld}&nbsp; {"= "}
                    {result.resultCalc.toFixed(2)}&nbsp; {result.currencyWanted}
                </strong>
            </>
        )}
    </div>
);

export default Result;
