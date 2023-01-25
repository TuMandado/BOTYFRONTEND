import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// Import styled-components
import styled from 'styled-components';

// Create a styled component for the img, and so there is an even space between the images from the left and right
const Img = styled.img`
    width: 50%;
    height: 100%;
    margin: 0 20%;
    object-fit: contain;
`;

// Create a styled component for the Carousel Container
// It should be a div that has a width of 60% of the screen and be centered and have a rounded border, a white background
const CarouselContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    border-radius: 10px;
    background-color: white;
`;

const CarouselComp = () => {
    // THE CAROUSEL NEEDS THE FOLLOWING REQUIERMENTS:
    // 1. The carousel needs to be responsive
    // 2. The carousel needs to be auto-play
    // 3. The carousel needs to be lacking the arrows
    // 4. The carousel needs to be lacking the dots
    // 5. The carousel needs to be moving slowly
    // 6. The carousel needs to be moving in an infite loop
    // 7. The carousel needs hide the arrows always

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 3000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <CarouselContainer>
            <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={3000}
                infinite={true}
                showDots={false}
                showArrows={false}
                removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']
                }
            >
                <Img 
                src="https://botycloud.com/wp-content/uploads/2022/06/latyn-grupo.jpg" alt="latyn-grupo" />
                <Img 
                src="https://botycloud.com/wp-content/uploads/2022/06/piazza.jpg" alt="piazza" />
                <Img 
                src="https://botycloud.com/wp-content/uploads/2022/06/bosca.jpg" alt="bosca" />
                <Img 
                src="https://botycloud.com/wp-content/uploads/2022/06/johnson-acero.jpg" alt="johnson-acero" />
                <Img 
                src="https://botycloud.com/wp-content/uploads/2022/06/kalydon-tools.jpg" alt="kalydon-tools" />
                <Img 
                src="https://botycloud.com/wp-content/uploads/2022/06/aftech.jpg" alt="aftech" />
                <Img 
                src="https://botycloud.com/wp-content/uploads/2022/06/morelli.jpg" alt="morelli" />
            </Carousel>
        </CarouselContainer>
    );
};

export default CarouselComp;