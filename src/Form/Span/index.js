import React from "react";
import styled from "styled-components";

const Text = styled.span`
    display: inline-block;
    padding: 20px 0 20px 20px;
`;

const Span = ({ text }) => (
    <Text className="span">
        {text}
    </Text>
);

export default Span;