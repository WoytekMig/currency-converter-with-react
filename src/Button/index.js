import React from 'react';
import './index.css';

const Button = ({ props, text }) => (
    <div className="button__div">
        <button
            className="button"
            onClick={() => props}
        >
            {text}
        </button>
    </div>
);

export default Button;
