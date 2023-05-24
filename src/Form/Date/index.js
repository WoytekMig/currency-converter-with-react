import React, { useEffect, useState } from "react";
import './index.css';

const DateAndHour = () => {
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
        <span className="form__date">
            Today is {currentDate.toLocaleDateString("en", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            })}&nbsp;
            {currentDate.toLocaleTimeString()}
        </span>
    );
};

export default DateAndHour;