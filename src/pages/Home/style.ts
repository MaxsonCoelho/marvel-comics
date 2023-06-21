import styled, { keyframes } from "styled-components";


export const Header = styled.div`
overflow: hidden;
background-color: #2E2E2E;
padding: 20px 10px;
`;

export const LogoMarvel = styled.img`
height: 30px;
`;

const hoverShake = keyframes`
  to {
    0% {transform: skew(0deg,0deg);}
    25% {transform: skew(5deg, 5deg);}
    75% {transform: skew(-5deg, -5deg);}
    100% {transform: skew(0deg,0deg);}
  }
`

export const SearchContainer = styled.div`
background: #fff;
height: 17px;
width: 70px;
left: 45%;
top: 17px;
border-radius: 30px;
position: absolute;
padding: 10px 30px;
display: flex;
align-self: center;
cursor: pointer;
transition: 0.8s;
box-shadow:  4px 4px 6px 0 rgba(255,255,255,.3),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
inset -4px -4px 6px 0 rgba(255,255,255,.2),
inset 4px 4px 6px 0 rgba(0, 0, 0, .2);
&:hover {
    
    width: 300px;
    left: 35%;
}
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
