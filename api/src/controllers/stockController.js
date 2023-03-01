const { Wine } = require("../db.js");

const removeStock = async (req, res) => {
  try {
    const { id, stock } = req.params;
    const wine = await Wine.findByPk(id);

    if (!wine) {
      return res.status(404).json({ message: "Vino no encontrado" });
    }

    // Verifica si hay suficiente stock antes de actualizar
    if (wine.stock < stock) {
      return res
        .status(400)
        .json({ message: "No hay suficiente stock disponible" });
    }

    // Actualiza el stock del vino
    await wine.update({
      stock: wine.stock - stock,
    });

    return res.json({ message: "Stock actualizado correctamente" });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: "Ocurrió un error al actualizar el stock del vino",
        error,
      });
  }
};

const addStock = async (req, res) => {
  try {
    const { id, stock } = req.params;
    const wine = await Wine.findByPk(id);

    if (!wine) {
      return res.status(404).json({ message: "Vino no encontrado" });
    }
    const newStock = wine.stock + parseInt(stock);
    await wine.update({ stock: newStock });
    return res.json({ message: "Stock actualizado correctamente" });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: "Ocurrió un error al actualizar el stock del vino",
        error,
      });
  }
};

module.exports = {
  removeStock,
  addStock,
};
