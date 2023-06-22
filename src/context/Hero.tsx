import React, {
    createContext,
    useContext,
    ReactNode,
    useEffect,
    useState,
  } from 'react';

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

export interface HeroData {
    data: Data[];
    changeData: any;
}
  
interface Props {
    children: ReactNode;
}

const HeroContext = createContext<HeroData>(
    {} as HeroData,
);

function HeroProvider({ children }: Props) {
const [data, setData] = useState<Data[]>([]);

function changeData(list: Data[]) {
    setData(list);
}

return (
    <HeroContext.Provider
    value={{
        data,
        changeData
    }}
    >
    {children}
    </HeroContext.Provider>
);
}

function useHero(): HeroData {
    const context = useContext(HeroContext);

    if (!context) {
        throw new Error('hero must be used within an hero');
    }

    return context;
}

export { HeroProvider, useHero };