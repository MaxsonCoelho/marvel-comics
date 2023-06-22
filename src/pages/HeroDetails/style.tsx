import styled, { keyframes } from "styled-components";


export const Container = styled.div`

`;

export const Header = styled.div`
display: flex;
overflow: hidden;
background-color: #2E2E2E;
padding: 20px;
justify-content: center;
`;

export const LogoMarvel = styled.img`
height: 50px;
position: absolute;
z-index: 3;
`;

export const ImageBackground = styled.img`
width: 100%;
filter: blur(2px) brightness(65%);
`;

export const ContainerDetails = styled.div`
position: absolute;
padding: 20px;
width: 30%;
border-radius: 4px;
background-color: rgba(0, 0, 0, .4);
top: 10%;
left: 12%;
`;

export const ImageHero = styled.img`
width: 25%;
position: absolute;
right: 15%;
top: 10%;
border-radius: 4px;
border: 10px solid #2E2E2E;
`;

export const NameHero = styled.h3`
margin-bottom: 10px;
font-weight: 600;
font-style: oblique;
font-family: Trebuchet MS;
text-align: center;
border-radius: 4px;
color: #fff;
text-align: center;
`;

export const HeroTextDetails = styled.p`
font-weight: 500;
font-style: oblique;
font-family: Trebuchet MS;
text-align: center;
border-radius: 4px;
color: #fff;
`;
