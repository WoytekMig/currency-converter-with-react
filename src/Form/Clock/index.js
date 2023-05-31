import React from "react";
import styled from "styled-components";
import { useCurrentDate } from "./useCurrentDate";

const ClockStyle = styled.span`
    display: block;
    font-size: small;
    text-align: right;
`;

const formattedDate = (date) => (date.toLocaleString("en", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
}));

const Clock = () => {
    const date = useCurrentDate();

    return (
        <ClockStyle>
            Today is  {formattedDate(date)}
        </ClockStyle>
    );
};

export default Clock;