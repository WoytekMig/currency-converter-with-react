import { useState, useEffect } from "react";

const requestURL = "https://api.exchangerate.host/latest?base=PLN&symbols=PLN,USD,EUR,GBP";

export const useRatesData = () => {

    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    useEffect(() => {

        const fetchRatesData = async () => {

            try {
                const response = await fetch(requestURL);

                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }

                const { rates, date } = await response.json();

                setRatesData({
                    status: "succes",
                    rates,
                    date,
                });

            } catch (error) {
                setRatesData({
                    status: "error",
                });
            }
        };
       
        setTimeout(fetchRatesData, 2000);
    }, []);

    return ratesData;
};

