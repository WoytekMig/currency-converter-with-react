import React from "react";
import styled from "styled-components";

const ResultStyle = styled.strong`
    font-size: xx-large;
    display: flex;
    justify-content: center;
    padding: 20px;
    margin: auto;
`;

const Result = ({ result }) => (

    <div>
        {result !== undefined && (
            <>
                <ResultStyle>
                    {result.moneyHeld.toFixed(2)}&nbsp;{result.currencyHeld} {" = "}
                    {result.resultCalc.toFixed(2)}&nbsp;{result.currencyWanted}
                </ResultStyle>
            </>
        )}
    </div>
);

export default Result;
