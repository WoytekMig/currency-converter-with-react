import React from "react";

const Select = ({ props }) => (
    <select name={props}>
        <option>PLN</option>
        <option>EUR</option>
        <option>GBP</option>
        <option>USD</option>
    </select>
);

export default Select;