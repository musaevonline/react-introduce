const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

const DATA = [
    {
        title: 'Genesis Masks Zeeverse',
        desc: 'Zeeverse: Genesdfq Genesis Masks 177 ETH',
        img: 'https://i.seadn.io/gcs/files/5baa0908181a6382965c0d1c6341b9b0.png?auto=format&dpr=1&h=500',
        price: 100
    },
    {
        title: 'GendfasdfqweZeeverse',
        desc: 'Zeeverse:efwMasks Floor 0.16 ETH Total volume 177 ETH',
        img: 'https://i.seadn.io/gcs/files/5baa0908181a6382965c0d1c6341b9b0.png?auto=format&dpr=1&h=500',
        price: 200
    },
    {
        title: 'GendfasdfqweZeeverse',
        desc: 'Zeeverse:efwMasks Floor 0.16 ETH Total volume 177 ETH',
        img: 'https://i.seadn.io/gcs/files/5baa0908181a6382965c0d1c6341b9b0.png?auto=format&dpr=1&h=500',
        price: 300
    }
]

app.get('/data', (req, res) => {
    const { priceFrom, priceTo } = req.query
    const priceFromNumber = Number(priceFrom) || 0
    const priceToNumber = Number(priceTo) || Number.MAX_SAFE_INTEGER
    const data = DATA.filter(row => row.price >= priceFromNumber && row.price <= priceToNumber)
    return res.send(data)
})

app.listen(9999)