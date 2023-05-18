import React from "react";
import Span from "../Span";

const Result = ({ result }) => (

    <div>
        {result.resultCalc ? (
            <>
                <Span text="Your calculation will look like :&nbsp;" />
                <strong className="form__result">
                    {result.mHeld} {result.currencyHeld} = {result.resultCalc.toFixed(2)} {result.cWanted}
                </strong>
            </>
        ) : ""}
    </div>
);

export default Result;
