import { Box, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'CharCode',
    headerName: 'CharCode',
    width: 150,
  },
  {
    field: 'Name',
    headerName: 'Name',
    width: 150,
  },
  {
    field: 'Value',
    headerName: 'Value',
    width: 150,
  },
];

const orderColumns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Валюта',
    width: 150,
  },
  {
    field: 'amount',
    headerName: 'Количество',
    width: 150,
  },
  {
    field: 'sum',
    headerName: 'Сумма',
    width: 150,
  },
];

function Apprakadabra() {
  const [data, setData] = useState([]);
  const [choosen, setChoosen] = useState([])
  const [amount, setAmount] = useState(0)
  const [orders, setOrders] = useState(JSON.parse(localStorage.getItem('orders') || '[]'))

  useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(res => res.json()).then((data) => {
      setData(Object.values(data.Valute).map(row => ({ ...row, id: row.ID })))
    })
  }, [])

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders])

  const choosenData = data.find(row => row.id === choosen[0])


  return (
    <Box>
      <DataGrid
        rowSelectionModel={choosen}
        onRowSelectionModelChange={(selected) => setChoosen([selected.pop()])}

        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
      {choosenData && (
        <Box m={10}>
          <Card>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Валюта для покупки - {choosenData.CharCode}
              </Typography>
              <Typography variant="h5" component="div">
                {choosenData.Name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {choosenData.Value} рублей
              </Typography>
            </CardContent>
          </Card>
          <Box display="flex" alignItems="center" gap={2} m={5}>
            <TextField value={amount} onChange={e => setAmount(e.target.value)} />
            <Typography>*</Typography>
            <TextField disabled value={choosenData.Value} />
            <Typography>=</Typography>
            <TextField disabled value={(amount * choosenData.Value).toFixed(2)} />
          </Box>
          <Button onClick={() => setOrders([...orders, {
            id: orders.length + 1,
            name: choosenData.Name,
            amount,
            sum: Number((amount * choosenData.Value).toFixed(2))
          }])} variant="contained">Купить</Button>
        </Box>
      )}
      <DataGrid
        rows={orders}
        columns={orderColumns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default Apprakadabra;
