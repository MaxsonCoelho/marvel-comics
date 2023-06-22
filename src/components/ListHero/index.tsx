import React, { useEffect } from 'react';
import { Data } from '../../pages/Home';
import { Link } from 'react-router-dom';
import { 
    Container, NameHero,
    ImageHero 
} from './style';



export interface Props {
    data: Data;
}

const ListHero = ({ data, ...rest }: Props) => {
    const IMAGE_SIZE = 'portrait_fantastic';

    return (
        
        <Container {...rest}>
            <Link style={{textDecoration: 'none'}} to={`/details/${data.id}`}>
                <ImageHero src={`${data.thumbnail.path}/${IMAGE_SIZE}.${data.thumbnail.extension}`} />
                <NameHero>{data.name}</NameHero> 
            </Link>
        </Container>
        
    )
}

export default ListHero;