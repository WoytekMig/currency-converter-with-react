import React from "react";
import Span from "../Span";
import styled from "styled-components";

const ResultStyle = styled.strong`
    font-size: large;
`;

const Result = ({ result }) => (

    <div>
        {result !== undefined && (
            <>
                <Span text="Your calculation will look like :&nbsp;" />
                <ResultStyle>
                    {result.moneyHeld.toFixed(2)}&nbsp; {result.currencyHeld}&nbsp; {"= "}
                    {result.resultCalc.toFixed(2)}&nbsp; {result.currencyWanted}
                </ResultStyle>
            </>
        )}
    </div>
);

export default Result;
