const { Wine } = require('../db');

const deleteWine = async (req, res) => {
  const idDeleteWine = req.params.id;
  const allWines = await Wine.findAll();
  let index = await allWines.findIndex(el => el.id == idDeleteWine);
  
  if(index >= 0) {
    allWines.splice(index, 1);
    res.send('Wine deleted succesfully!!');
  } else {
      res.status(404).send('This ID does not exist, try with another');
    }

  if(idDeleteWine) {
    await Wine.destroy({
      where : {id : idDeleteWine}
    })
  }
}

module.exports = { deleteWine };