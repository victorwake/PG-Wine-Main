const { Varietal } = require('../db');


/*Creo las varietal en la DB*/
const insertVarietal = async () => {
    const typeOfVarietal = [
        {name: 'Sauvignon Blanc'},
        {name: 'Bonarda'},
        {name: 'Pinot Noir'},
        {name: 'Cabernet Franc'},
        {name: 'Malbec'},
        {name: 'Cabernet Sauvignon'},
        {name: 'Chardonnay'},
        {name: 'Pedro Ximénez'},
        {name: 'Pinot Gris'},
        {name: 'Merlot'},
        {name: 'Syrah'},
        {name: 'Torrontés'},
        {name: 'Tannat'},
        {name: 'Semillón'},
        {name: 'Grenache'},
        {name: 'Pinot Grigio'},
        {name: 'Blend'},
        {name: 'Dulce'},
        {name: 'Extra Brut'},
        {name: 'Tempranillo'},
        {name: 'Petit Verdot'},
        {name: 'dulce'},
        {name: 'Extra brut'},
<<<<<<< HEAD
        {name: 'Pink'}

=======
        {name: 'rose'},
>>>>>>> 6cc14e96a2bdc8bca49c3ba2522317a92fdf2eb3
    ]
    await Varietal.bulkCreate(typeOfVarietal);
    console.log('varietal loaded in the db');  
};


module.exports = {
    insertVarietal
}