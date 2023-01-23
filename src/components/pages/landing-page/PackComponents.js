import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
// Add a space up and down
    margin: 20px 0;
display: flex; 
flex-direction: column; 
align-items: center;
background-color: ${props => props.backgroundColor || "#00DFEC"};
width: 250px;
height: 350px;
// Add a rounded border
border-radius: 20px;
`;

const HeadImageContainer = styled.img`  
    width: 180px; 
    height: 180px; 
    object-fit: contain; 
`;

const FeatureListContainer = styled.div` p { text-align: center; }`;

const Button = styled.a`
    font-size: 18px;
    font-weight: 700;
    background-color: ${props => props.buttonColor || '#3A00A3'};
    height: 50px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 25px;
    text-decoration: none;
    &:hover {
        background-color: #FF0077;
        // Add a transition to the hover
        transition: 0.5s;
    }
`;

const PContainer = styled.p`
font-size: 8x;
font-weight: 600;
align-items: center;
// color: #3A00A3;
color: ${props => props.listColor || "#3A00A3"};
`;

const ButtonContainer = styled.div`
width: 180px; 
height: 180px; 
object-fit: contain; 
display: flex;
justify-content: center;
`;


const PackComponents = ({
    head_image,
    feature_list,
    button,
    backgroundColor = "#00DFEC",
    buttonColor = "#3A00A3",
    listColor = "#3A00A3",
}) => {
    return (
        <Wrapper backgroundColor={backgroundColor}>
            <HeadImageContainer src={head_image} alt="Pack Prices" />
            <FeatureListContainer>
                {feature_list.map((feature, index) => (
                    <PContainer
                        listColor={listColor}
                        key={index}
                    >{feature}</PContainer>
                ))}
            </FeatureListContainer>
            <ButtonContainer>
                <Button
                    buttonColor={buttonColor}
                    href={button.ref}
                >{button.text}</Button>
            </ButtonContainer>
        </Wrapper>
    );
};

export default PackComponents;