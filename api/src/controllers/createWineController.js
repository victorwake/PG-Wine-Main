const { Wine } = require('../db');

const createWine = async(req, res) => {
    let {
        name,
        varietal,
        color_type,
        winery,
        price,
        stock,
        alcohol,
        volume,
        image,
        year,
        province,
        region,
        url,
        description
    } = req.body;

    if (!name || !varietal || !color_type || !winery || !price || !image || !url || !description) {
        res.status(500).send('Complete all required fields');
    } 
    else if (price < 0 || alcohol < 0 || volume < 0) {
        res.status(500).send('Numerous negatives are not allowed');
    } 
    else {
        try {
            if(image){
                const uploadRes = await cloduninary.uploader.upload(image, {
                    upload_preset:'dionisiowine'
                    })
                if(uploadRes){
                    const product = new Wine({
                        name,
                            varietal,
                            color_type,
                            winery,
                            price,
                            stock,
                            alcohol,
                            volume,
                            image: uploadRes,
                            year,
                            province,
                            region,
                            url,
                            description
                    })
                    const savedProduct = await product.save()                  
                    req.statusCode(200).send(savedProduct)
                    res.send('Wine created succesfully!!');
                }
            }}
            catch (error){
            console.log(error)
            res.status(500).send(error)}
        }
}
module.exports = { createWine };