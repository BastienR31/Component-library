import React, { useState } from 'react';
import styled from 'styled-components';


const sizeCalculation = (size) => {

    let sizeWidth;

    if (size === "small") sizeWidth = '100px';
    if (size === "medium") sizeWidth = '200px';
    if (size === "large") sizeWidth = '300px';

    return sizeWidth;
};

const StyledButton = styled.button`
    width: ${props => sizeCalculation(props.size)};
    height: 50px;
    font-size: 18px;
    border: none;
    border-radius: 3px;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 25, .2);
    padding: 5px 5px;

`;

const Button = (
    { size, color, backgroundColor, textButton }
) => {
    return (
        <StyledButton
            size={size}
            color={color}
            backgroundColor={backgroundColor}
        >
            {textButton}
        </StyledButton>
    );
};

export default Button;
