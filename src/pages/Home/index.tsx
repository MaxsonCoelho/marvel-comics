import React, {useEffect, useState} from 'react'; 
import md5 from 'md5';
import api from '../services/marvel';
import { MdSearch } from 'react-icons/md';
import { 
    Header, LogoMarvel, 
    SearchContainer, SearchInput, 
    SearchBtn 
} from './style';

interface Data {
    name: string,
    id: number,
    description: string,
    thumbnail: string
}

const Home: React.FC = () => {
    const [data, setData] = useState<Data[]>([]);

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

    return (
        <div>
            <Header>
                <LogoMarvel src={require('../../assets/marvel-logo.png')} />
                <SearchContainer>
                    <MdSearch onClick={()=> console.log('foi')} color='#2E2E2E' 
                        size={30} style={{position: 'absolute', top: 3, left: 3}} />
                    <SearchInput type='text' name='search' placeholder='Buscar...' />
                </SearchContainer>
                {/* <div class="search-container">
                    <input type="text" name="search" placeholder="Search..." class="search-input">
                    <a href="#" class="search-btn">
                            <i class="fas fa-search"></i>      
                    </a>
                </div> */}
            </Header>
            {data?.map((item) => (
                <h1 key={item.id}>{item.name}</h1>
            ))}
        </div>
    )
}

export default Home;