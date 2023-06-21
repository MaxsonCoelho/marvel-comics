import React, {useEffect, useMemo, useState} from 'react'; 
import md5 from 'md5';
import api from '../services/marvel';
import { MdSearch } from 'react-icons/md';
import { 
    Header, LogoMarvel, 
    SearchContainer, SearchInput
} from './style';


interface Data {
    name: string,
    id: number,
    description: string,
    thumbnail: string
}

const Home: React.FC = () => {
    const [data, setData] = useState<Data[]>([]);
    const [text, setText] = useState<string>('');

    const public_Key = '1c3ba878bfd6f4cc88c8ba5ef829c2d5';
    const private_Key = '8dc3d290fef6bcf4dccf3588c8219c9ab6d9aeb9';

    const time = Number(new Date());
    const hash = md5(time + private_Key + public_Key);

    useEffect(() => {
        const getApi = async () => {
            
            api.get(`/characters?ts=${time}&apikey=${public_Key}&hash=${hash}`)
            .then(r => {
                setData(r.data.data.results);
                console.log(r.data.data.results)
            }).catch(e => console.log(e))
        }
        getApi();
    }, []);

    const handleChange = (event:any) => {
        setText(event.target.value);
    };

    const searchedHero = useMemo(() => {
        const lowerSearch = text.toLocaleLowerCase(); 
        return data.filter(hero => 
            hero.name.toLocaleLowerCase().includes(lowerSearch))
    }, [text, data]); 
    
    return (
        <div>
            <Header>
                <LogoMarvel src={require('../../assets/marvel-logo.png')} />
                <SearchContainer>
                    <MdSearch color='#2E2E2E' size={30} 
                    style={{position: 'absolute', top: 3, left: 3}} />
                    <SearchInput value={text} type='text' name='search' 
                    onChange={handleChange} placeholder='Buscar...' />
                </SearchContainer>
                
            </Header>
            {text.length < 0 || text.length == 0 ?
                data?.map((item) => (
                    <h1 key={item.id}>{item.name}</h1>
                ))
            :
                searchedHero?.map((item) => (
                    <h1 key={item.id}>{item.name}</h1>
                ))
            }            
        </div>
    )
}

export default Home;