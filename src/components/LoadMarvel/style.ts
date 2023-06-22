import styled, { keyframes } from "styled-components";


export const Container = styled.div`
display: flex;
position: absolute;
width: 100%;
height: 100%;
align-items: center;
justify-content: center;
`;

const spinAnimation = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

export const ImageHero = styled.img`
height: 100px;
padding: 50%;
animation: ${spinAnimation} 0.5s linear infinite;
`;

