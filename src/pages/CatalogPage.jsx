import { useEffect, useState } from 'react';
import { MyCard } from '../components/Card';
import { Box, Button, TextField } from '@mui/material';
import { useStorageState } from 'react-storage-hooks';

function CatalogPage() {
    const [data, setData] = useState([]);
    const [priceFrom, setPriceFrom] = useState('');
    const [priceTo, setPriceTo] = useState('');

    const [cart, setCart] = useStorageState(
        localStorage,
        'cart',
        {}
    );

    const addToCart = (id) => {
        const prev = cart[id] || 0
        setCart({ ...cart, [id]: prev + 1 })
    }

    const fetchData = () => {
        const priceFromNumber = Number(priceFrom) || 0
        const priceToNumber = Number(priceTo) || 0
        fetch(`http://localhost:9999/data?priceFrom=${priceFromNumber}&priceTo=${priceToNumber}`).then(res => res.json()).then(setData)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="App">
            <Box display="flex" gap={2}>
                <TextField label="Цена от" onChange={e => setPriceFrom(e.target.value)} />
                <TextField label="Цена до" onChange={e => setPriceTo(e.target.value)} />
                <Button onClick={fetchData}>Применить</Button>
            </Box>
            <Box display="flex" flexWrap="wrap" gap={3} my={3} justifyContent="center">
                {data.map(row => (
                    <MyCard title={row.title} desc={row.desc} img={row.img} price={row.price} onBuy={() => addToCart(row.id)} />
                ))}
            </Box>
        </div>
    );
}

export default CatalogPage;
