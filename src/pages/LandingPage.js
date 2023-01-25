import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import CarouselComp from '../components/pages/landing-page/Carousel'
import AllPacksComponents from '../components/pages/landing-page/AllPacksComponents';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Utils from '../utils/Utils'
const { redirectToPath } = Utils.navigation;

// Create a styled component div with a white background and rounded corners and a 60% width
const TextContainer = styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    width: 60%;
`;

// Color light grey
const Text = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
    margin: 4%;
    color: #a0a0a0;
`;

const TextII = styled.div`
    color: #fff; 
    font-size: 1.5em; 
    font-weight: bold; 
    text-align: center; 
    width: 60%; // llevalo un poco mas a la izquierda un 30%
    margin-right: 30%;
`;

const TitleText = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    margin: 4%;
    color: #3a00a3;
    // Make the text centered
    text-align: center;
`;

const BotyImage = styled.img`
    height: '400px',
    width: "auto"
`;

const BotyImageContainer = styled.div`
    display: block; 
    width: 20%; 
    margin-top: 0%; 
    margin-right: 30%;
`;

const BotyHead = styled.img`
    // Make the image 20% width
    width: 20%;
`;

// Images
const BotyHeadImage = "https://botycloud.com/wp-content/uploads/2022/09/Boty.gif";
const BotyBodyImage = "https://botycloud.com/wp-content/uploads/2022/06/img-boty.svg";

// Text
const text1Str = "Ofrecemos datos en tiempo real para clientes exigentes de MercadoLibre para aumentar sus ventas."
const text2Str = "¡Optimiza tu negocio en Mercado Libre con nuestra solución en la nube! Procesamos la información de tus productos para brindarte insights valiosos y automatizar tus procesos de venta. ¡Deja que la nube haga el trabajo pesado, mientras te concentras en lo que realmente importa: vender! ¡Con nuestra solución en la nube, estarás a la vanguardia de tu negocio!"

// Little helpers ...
const url = (name, wrap = false) =>
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

function LandingPage() {
    const parallax = useRef(null)
    return (
        <div style={{ width: '100%', height: '100%', background: '#253237' }}>
            <Parallax ref={parallax} pages={5}>
                <ParallaxLayer
                    factor={7}
                    offset={1}
                    speed={1}
                    style={{
                        background: 'linear-gradient(180deg, rgba(58,0,163,1) 0%, rgba(0,223,236,1) 35%, rgba(255,255,255,1) 60%, rgba(255,255,255,1) 80%, rgba(0,212,255,1) 100%)'
                    }} />



                <ParallaxLayer
                    offset={0}
                    speed={0}
                    factor={3}
                    style={{
                        backgroundImage: url('stars', true),
                        backgroundSize: 'cover',
                    }}
                />

                <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
                    <img 
                    alt='satellite4'
                    src={url('satellite4')} 
                    style={{ width: '15%', marginLeft: '70%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                    <img 
                    alt='cloud1'
                    src={url('cloud')} 
                    style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                    <img 
                    alt='cloud2'
                    src={url('cloud')} 
                    style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                    <img 
                    alt='cloud3'
                    src={url('cloud')} 
                    style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                    <img 
                    alt='cloud4'
                    src={url('cloud')} 
                    style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                    <img 
                    alt='cloud5'
                    src={url('cloud')} 
                    style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                    <img 
                    alt='cloud6'
                    src={url('cloud')} 
                    style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                    <img
                    alt='cloud7' 
                    src={url('cloud')} 
                    style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                    <img 
                    alt='cloud8'
                    src={url('cloud')} 
                    style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                    <img 
                    alt='cloud9'
                    src={url('cloud')} 
                    style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                    <img 
                    alt='cloud10'
                    src={url('cloud')} 
                    style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                    <img 
                    alt='cloud11'
                    src={url('cloud')} 
                    style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2.5}
                    speed={-0.4}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none',
                    }}>
                    <img 
                    alt='earth'
                    src={url('earth')} 
                    style={{ width: '60%' }} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.8}
                    speed={.2}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onClick={() => parallax.current.scrollTo(0)}>
                    <TextContainer >
                        <Text>
                            {text1Str}
                        </Text>
                    </TextContainer>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={0.1}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none',
                    }}>
                    <CarouselComp />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.8}
                    speed={-0.3}
                    style={{
                        backgroundSize: '80%',
                        backgroundPosition: 'center',
                    }}
                />



                <ParallaxLayer
                    offset={0}
                    speed={0.1}
                    onClick={() => parallax.current.scrollTo(1)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <BotyHead 
                    alt='Boty Head'
                    src={BotyHeadImage}
                     />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={0.1}
                    onClick={() => parallax.current.scrollTo(2)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <TextII>{text2Str}</TextII>
                </ParallaxLayer>


                <ParallaxLayer
                    offset={2.7}
                    speed={0.2}
                    onClick={() => parallax.current.scrollTo(0)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <TextContainer >
                        <TitleText>Packs</TitleText>
                    </TextContainer>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={3}
                    speed={0.1}
                    onClick={() => parallax.current.scrollTo(0)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>

                    <AllPacksComponents />
                </ParallaxLayer>
                <ParallaxLayer
                    offset={4}
                    speed={0.1}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        // pointerEvents: 'none'
                    }}>
                    <BotyImageContainer >
                        <BotyImage 
                        alt='Boty Body'
                        src={BotyBodyImage} />
                    </BotyImageContainer>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={4}
                    speed={.4}
                    style={{
                        display: 'block',
                        width: '90%',
                        marginTop: '20%',
                        marginLeft: '60%'
                    }}    >
                    <Button text="Conéctate con nosotros" onClick={() => redirectToPath("contacto")} />
                </ParallaxLayer>
                <ParallaxLayer
                    offset={4}
                    speed={.5}
                    style={{
                        display: 'block',
                        width: '90%',
                        marginTop: '30%',
                        marginLeft: '60%'
                    }}    >
                    <Button text="Regístrate ahora" color="#3A00A3" onClick={() => redirectToPath("register")} />
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}



export default LandingPage;

