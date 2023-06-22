import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useHero } from '../../context/Hero';
import {
    Container
} from './style';
// import {  } from 'react-router-dom';

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
    // let history = useHistory();
    // history.push('/home');
    const { data } = useHero();
    const navigate = useNavigate();
    const { id } = useParams();

    const back = () => {
        navigate(-1);
    }
    console.log(id);

    const filterHero = data.filter(hero => String(hero.id) == id)
    console.log(filterHero)

    return (
        <Container {...rest}>
            {filterHero.map(item => (
                <h1 key={item.id}>{item.name}</h1>
            ))}
        </Container>
    )
}

export default HeroDetails;