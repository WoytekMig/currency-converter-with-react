import React from "react";
import styled from "styled-components";

const Text = styled.span`
    display: inline-block;
    padding: 40px 0 20px 20px;
    font-size: large;
`;

const Span = ({ text }) => (
    <Text className="span">
        {text}
    </Text>
);

export default Span;