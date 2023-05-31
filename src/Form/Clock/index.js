import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ClockStyle = styled.span`
    display: block;
    font-size: small;
    text-align: right;
`;

const formattedDate = (currentDate) => (currentDate.toLocaleString("en", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
}));

const Clock = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <ClockStyle>
            Today is  {formattedDate(currentDate)}
        </ClockStyle>
    );
};

export default Clock;