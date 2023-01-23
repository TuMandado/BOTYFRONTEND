import React from 'react'
import PackComponents from './PackComponents'
import styled from 'styled-components'

// Elements should be displayed hotizontaly, centered and evenly spaced,
// But if the screen is too small, they should be displayed vertically
const Wrapper = styled.div` 
display: flex; 
flex-direction: row; 
justify-content: space-evenly; 
align-items: center; 
flex-wrap: wrap; 
width: 100%; height: 100%; 
@media (max-width: 768px) { 
    flex-direction: column; 
    align-items: center; 
    // Add an evenly space between the elements vertically
    justify-content: space-evenly;
} 
border-radius: 20px;
`;


function AllPacksComponents() {
    return (
        <Wrapper>
            <PackComponents
                head_image="https://botycloud.com/wp-content/uploads/2022/06/pack-precios2.svg"
                feature_list={[
                    "Tablero de precios",
                    "Cálculo de desvíos",
                    "Alertas diarias",
                    "Información por seller y publicaciones"
                ]}
                button={{
                    ref: "https://botycloud.com/packs/",
                    text: "SABER MÁS"
                }}
            />
            <PackComponents
                head_image="https://botycloud.com/wp-content/uploads/2022/06/pack-ventaystock.svg"
                feature_list={[
                    `Pack precios`,
                    `Info de ventas ($ y Q)`,
                    `Stock por publicación`,
                    `Alertas de publicaciones pausadas`
                ]}
                button={{
                    ref: "https://botycloud.com/packs/",
                    text: "SABER MÁS"
                }}
            />
            <PackComponents
                head_image="https://botycloud.com/wp-content/uploads/2022/06/pack-competencia.svg"
                feature_list={[
                    `Pack Ventas y Stock`,
                    `Publicaciones de la competencia: Precios,
                    ventas, stock`,
                    `Alertas`
                ]}
                button={{
                    ref: "https://botycloud.com/packs/",
                    text: "SABER MÁS"
                }}
            />
            <PackComponents
                head_image="https://botycloud.com/wp-content/uploads/2022/06/pack-enterprise.svg"
                feature_list={[
                    `Pack Competencia`,
                    `Tableros personalizados`,
                    `Acceso para distribuidores`,
                    `Conector Data Studio`
                ]}
                button={{
                    ref: "https://botycloud.com/packs/",
                    text: "SABER MÁS"
                }}
                backgroundColor="#3A00A3"
                buttonColor="#FF0077"
                listColor="#fff"
            />
        </Wrapper>
    )
}

export default AllPacksComponents