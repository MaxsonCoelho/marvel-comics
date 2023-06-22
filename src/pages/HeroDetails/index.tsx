import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useHero } from '../../context/Hero';
import { MdKeyboardArrowLeft } from "react-icons/md";
import {
    Container, ImageBackground,
    ContainerDetails, LogoMarvel,
    Header, ImageHero,
    NameHero, HeroTextDetails
} from './style';

export interface Data {
    name: string;
    id: string;
    description: string;
    thumbnail: Img;
}

export interface Img {
    path: string;
    extension: string;
}

const HeroDetails: React.FC = ({ ...rest }) => {
    const { data } = useHero();
    const navigate = useNavigate();
    const { id } = useParams();
    const IMAGE_SIZE = 'portrait_fantastic';

    const back = () => {
        navigate(-1);
    }

    const filterHero = data.filter(hero => String(hero.id) == id)

    return (
        <Container {...rest}>
            <Header>
                <MdKeyboardArrowLeft onClick={back} color='#fff' size={30} 
                    style={{position: 'absolute', top: 5, left: 5}} />
                <LogoMarvel src={require('../../assets/marvel-logo.png')} />
            </Header>
            <ImageBackground src={require('../../assets/marvel-fundo-2.jpeg')} />
            <ImageBackground src={require('../../assets/dc-marvel.jpg')} />
            <ImageBackground src={require('../../assets/marvel-fundo-1.jpeg')} />
            <ImageBackground src={require('../../assets/marvel-fundo-3.jpeg')} />
            {filterHero.map(item => (
                <>
                    <ImageHero src={`${item.thumbnail.path}/${IMAGE_SIZE}.${item.thumbnail.extension}`} />
                    <ContainerDetails key={item.id}>
                        <NameHero>{item.name}</NameHero>
                        <HeroTextDetails>{
                            item.description ? 
                            item.description : 
                            'Desculpe, mas os detalhes deste herói não estão disponíveis no momento'
                        }</HeroTextDetails>
                    </ContainerDetails>
                </>
            ))}
            
        </Container>
    )
}

export default HeroDetails;