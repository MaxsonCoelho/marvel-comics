import styled, { keyframes } from "styled-components";


export const Container = styled.div`
background-color: #2E2E2E;
border-radius: 4px;
padding: 20px;
box-shadow:  4px 4px 6px 0 rgba(255,255,255,.3),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
inset -4px -4px 6px 0 rgba(255,255,255,.2),
inset 4px 4px 6px 0 rgba(0, 0, 0, .2);
&:hover {
    background-color: #ED1D24;
}
`;

export const ImageHero = styled.img`
width: 100%;
border-radius: 4px;
border: 0.8px solid #fff;
`;

export const NameHero = styled.h1`
font-weight: 600;
font-style: oblique;
font-family: Trebuchet MS;
text-align: center;
border-radius: 4px;
color: #fff;
`;