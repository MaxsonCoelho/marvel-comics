import React from 'react';
import { 
    Container, ImageHero 
} from './style';


const LoadMarvel: React.FC = () => {

    return (
        <Container>
            <ImageHero src={require(`../../assets/marvel-logo.png`)} />
        </Container>
    )
}

export default LoadMarvel;