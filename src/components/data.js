const DATA = [
    {
        id: 1,
        title: 'Genesis Masks Zeeverse',
        desc: 'Zeeverse: Genesdfq Genesis Masks 177 ETH',
        img: 'https://i.seadn.io/gcs/files/5baa0908181a6382965c0d1c6341b9b0.png?auto=format&dpr=1&h=500',
        price: 100
    },
    {
        id: 2,
        title: 'GendfasdfqweZeeverse',
        desc: 'Zeeverse:efwMasks Floor 0.16 ETH Total volume 177 ETH',
        img: 'https://i.seadn.io/gcs/files/5baa0908181a6382965c0d1c6341b9b0.png?auto=format&dpr=1&h=500',
        price: 200
    },
    {
        id: 3,
        title: 'GendfasdfqweZeeverse',
        desc: 'Zeeverse:efwMasks Floor 0.16 ETH Total volume 177 ETH',
        img: 'https://i.seadn.io/gcs/files/5baa0908181a6382965c0d1c6341b9b0.png?auto=format&dpr=1&h=500',
        price: 300
    },
    {
        id: 4,
        title: 'Genesis Masks Zeeverse',
        desc: 'Zeeverse: Genesdfq Genesis Masks 177 ETH',
        img: 'https://i.seadn.io/gcs/files/5baa0908181a6382965c0d1c6341b9b0.png?auto=format&dpr=1&h=500',
        price: 100
    },
    {
        id: 5,
        title: 'GendfasdfqweZeeverse',
        desc: 'Zeeverse:efwMasks Floor 0.16 ETH Total volume 177 ETH',
        img: 'https://i.seadn.io/gcs/files/5baa0908181a6382965c0d1c6341b9b0.png?auto=format&dpr=1&h=500',
        price: 200
    },
    {
        id: 6,
        title: 'GendfasdfqweZeeverse',
        desc: 'Zeeverse:efwMasks Floor 0.16 ETH Total volume 177 ETH',
        img: 'https://i.seadn.io/gcs/files/5baa0908181a6382965c0d1c6341b9b0.png?auto=format&dpr=1&h=500',
        price: 300
    },
    {
        id: 7,
        title: 'Genesis Masks Zeeverse',
        desc: 'Zeeverse: Genesdfq Genesis Masks 177 ETH',
        img: 'https://i.seadn.io/gcs/files/5baa0908181a6382965c0d1c6341b9b0.png?auto=format&dpr=1&h=500',
        price: 100
    },
    {
        id: 8,
        title: 'GendfasdfqweZeeverse',
        desc: 'Zeeverse:efwMasks Floor 0.16 ETH Total volume 177 ETH',
        img: 'https://i.seadn.io/gcs/files/5baa0908181a6382965c0d1c6341b9b0.png?auto=format&dpr=1&h=500',
        price: 200
    },
    {
        id: 9,
        title: 'GendfasdfqweZeeverse',
        desc: 'Zeeverse:efwMasks Floor 0.16 ETH Total volume 177 ETH',
        img: 'https://i.seadn.io/gcs/files/5baa0908181a6382965c0d1c6341b9b0.png?auto=format&dpr=1&h=500',
        price: 300
    },
    {
        id: 10,
        title: 'Genesis Masks Zeeverse',
        desc: 'Zeeverse: Genesdfq Genesis Masks 177 ETH',
        img: 'https://i.seadn.io/gcs/files/5baa0908181a6382965c0d1c6341b9b0.png?auto=format&dpr=1&h=500',
        price: 100
    },
    {
        id: 11,
        title: 'GendfasdfqweZeeverse',
        desc: 'Zeeverse:efwMasks Floor 0.16 ETH Total volume 177 ETH',
        img: 'https://i.seadn.io/gcs/files/5baa0908181a6382965c0d1c6341b9b0.png?auto=format&dpr=1&h=500',
        price: 200
    },
    {
        id: 12,
        title: 'GendfasdfqweZeeverse',
        desc: 'Zeeverse:efwMasks Floor 0.16 ETH Total volume 177 ETH',
        img: 'https://i.seadn.io/gcs/files/5baa0908181a6382965c0d1c6341b9b0.png?auto=format&dpr=1&h=500',
        price: 300
    }
]

export const getData = (priceFrom, priceTo) => {
    const priceFromNumber = Number(priceFrom) || 0
    const priceToNumber = Number(priceTo) || Number.MAX_SAFE_INTEGER
    const data = DATA.filter(row => row.price >= priceFromNumber && row.price <= priceToNumber)
    return data
}