import { useEffect, useState } from 'react';
import { MyCard } from './components/Card';
import { Box, Button, TextField } from '@mui/material';

function App() {
  const [data, setData] = useState([]);
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');

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
      <Box display="flex">
        <TextField label="Цена от" onChange={e => setPriceFrom(e.target.value)} />
        <TextField label="Цена до" onChange={e => setPriceTo(e.target.value)} />
        <Button onClick={fetchData}>Применить</Button>
      </Box>
      {data.map(row => (
        <MyCard title={row.title} desc={row.desc} img={row.img} price={row.price} />
      ))}
    </div>
  );
}

export default App;
