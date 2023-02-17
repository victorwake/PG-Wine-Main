export const nameASC = (a, b) => {
    const nA = a.name.toUpperCase()
    const nB = b.name.toUpperCase()
    if(nA > nB) return 1;
    if(nA < nB) return -1;
    return 0
}

export const nameDES = (a, b) => {
    const nA = a.name.toUpperCase()
    const nB = b.name.toUpperCase()
    if(nA > nB) return -1;
    if(nA < nB) return 1;
    return 0 
}


export const priceASC = (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
}

export const priceDES = (a, b) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
}