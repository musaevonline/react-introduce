import { useEffect, useState } from 'react';
import { MyCard } from '../components/Card';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useStorageState } from 'react-storage-hooks';
import { getData } from '../components/data';

function CartPage() {
    const [data, setData] = useState([]);

    const [cart] = useStorageState(
        localStorage,
        'cart',
        {}
    );


    const fetchData = () => {
        setData(getData())
    }

    useEffect(() => {
        fetchData()
    }, [])


    const filteredData = data.filter(row => !!cart[row.id])

    return (
        <Box display="flex" flexWrap="wrap" gap={3} my={3} justifyContent="center">
            {filteredData.map(row => (
                <Box display='flex' width="100%" gap={5}>
                    <MyCard title={row.title} desc={row.desc} img={row.img} price={row.price} />
                    <Typography>Количество: {cart[row.id]}</Typography>
                </Box>
            ))}
        </Box>
    );
}

export default CartPage;
