import styled, { keyframes } from "styled-components";


export const Header = styled.div`
overflow: hidden;
background-color: #2E2E2E;
padding: 20px 10px;
`;

const shineAnimation = keyframes`
  0% {
    opacity: 0.4;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.4;
  }
`;

export const LogoMarvel = styled.img`
height: 50px;
padding-right: 20px;
animation: ${shineAnimation} 1.2s ease-in-out infinite;
`;

export const SearchContainer = styled.div`
background: #fff;
height: 17px;
width: 70px;
left: 45%;
top: 27px;
border-radius: 30px;
position: absolute;
padding: 10px 30px;
display: flex;
align-self: center;
transition: 0.8s;
box-shadow:  4px 4px 6px 0 rgba(255,255,255,.3),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
inset -4px -4px 6px 0 rgba(255,255,255,.2),
inset 4px 4px 6px 0 rgba(0, 0, 0, .2);
`;

export const SearchInput = styled.input`
background: transparent;
border: none;
outline:none;
width: 400px;
font-weight: 500;
font-size: 15px;
color: #000;
transition: 0.8s;
`;

export const SearchBtn = styled.a`

`;

export const SectionList = styled.body`
padding: 25px;
`;

export const ListWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
grid-gap: 10px;
`;


