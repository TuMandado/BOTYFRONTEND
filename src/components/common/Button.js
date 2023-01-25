import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
font-size: 18px;
font-weight: 700;
background-color: ${props => props.color || '#3A00A3'};
// height: 50px;
height: ${props => props.height || '50px'};
// width: 200px;
width: ${props => props.width || '200px'};
display: flex;
justify-content: center;
align-items: center;
// color: #fff;
color: ${props => props.textColor || '#fff'};
border-radius: 25px;
border: none;
text-decoration: none;
&:hover {
    // background-color: #FF0077;
    background-color: ${props => props.hoverColor || '#FF0077'};
    // Add a transition to the hover
    transition: 0.5s;
}
}
`;

function Button({
    text = "Button",
    color = "#00DFEC",
    onClick = () => console.log("Button clicked")
}) {
    return (
        <StyledButton color={color} onClick={onClick}>
            {text}
        </StyledButton>
    );
}

export default Button;
