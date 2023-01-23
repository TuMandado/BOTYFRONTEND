// import React from 'react'
// import { Parallax, ParallaxLayer } from 'react-spring/parallax'
// // import './LandingPage.css'
// import { Link } from 'react-router-dom'

// import background from '../images/background.jpg'



import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import Carousel_Comp from '../components/pages/landing-page/Carousel'
import AllPacksComponents from '../components/pages/landing-page/AllPacksComponents';
import styled from 'styled-components';

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

const TitleText = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    margin: 4%;
    color: #3a00a3;
    // Make the text centered
    text-align: center;
`;

// Little helpers ...
const url = (name, wrap = false) =>
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

function LandingPage() {
    const parallax = useRef(null)
    return (
        <div style={{ width: '100%', height: '100%', background: '#253237' }}>
            <Parallax ref={parallax} pages={5}>
                {/* <ParallaxLayer
                    factor={2}
                    offset={1} speed={1} style={{ backgroundColor: '#3a00a3' }} /> */}
                <ParallaxLayer
                    factor={7}
                    offset={1}
                    speed={1}
                    style={{
                        background: 'linear-gradient(180deg, rgba(58,0,163,1) 0%, rgba(0,223,236,1) 35%, rgba(255,255,255,1) 60%, rgba(255,255,255,1) 80%, rgba(0,212,255,1) 100%)'
                    }} />
                {/* <ParallaxLayer
                    factor={3}
                    offset={3}
                    speed={1}
                    style={{
                        background: 'linear-gradient(to bottom, #fff, #ffe600)'
                    }} /> */}



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
                    <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
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
                    <img src={url('earth')} style={{ width: '60%' }} />
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
                    {/* <img src={url('clients-main')} style={{ width: '40%' }} /> */}
                    <TextContainer >
                        <Text>
                            Ofrecemos datos en tiempo real para clientes exigentes de MercadoLibre para aumentar sus ventas.
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
                    {/* <img src={url('earth')} style={{ width: '60%' }} /> */}
                    <Carousel_Comp />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.8}
                    speed={-0.3}
                    style={{
                        backgroundSize: '80%',
                        backgroundPosition: 'center',
                        // backgroundImage: url('clients', true),
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
                    <img src={"https://botycloud.com/wp-content/uploads/2022/09/Boty.gif"} style={{
                        width: '20%',
                        // border: 'solid 2px #330099',
                        // borderRadius: '15%',
                    }} />
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
                    {/* <img src={url('bash')} style={{ width: '40%' }} /> */}
                    {/* 
                    // Create a text component that says:
                    ¡Optimiza tu negocio en Mercado Libre con nuestra solución en la nube! Procesamos la información de tus productos para brindarte insights valiosos y automatizar tus procesos de venta. ¡Deja que la nube haga el trabajo pesado, mientras te concentras en lo que realmente importa: vender! ¡Con nuestra solución en la nube, estarás a la vanguardia de tu negocio!

                    */}
                    <div style={{
                        color: '#fff',
                        fontSize: '1.5em',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        width: '60%',
                        // llevalo un poco mas a la izquierda
                        marginRight: '30%',
                    }}>
                        ¡Optimiza tu negocio en Mercado Libre con nuestra solución en la nube! Procesamos la información de tus productos para brindarte insights valiosos y automatizar tus procesos de venta. ¡Deja que la nube haga el trabajo pesado, mientras te concentras en lo que realmente importa: vender! ¡Con nuestra solución en la nube, estarás a la vanguardia de tu negocio!
                    </div>
                </ParallaxLayer>



                {/* Create another layer */}
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
                    {/* <img src={url('clients-main')} style={{ width: '40%' }} /> */}
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
                    <AllPacksComponents/>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}



// function LandingPage() {
//     return (
//         <AllPacksComponents/>
//     )
// }

export default LandingPage;

