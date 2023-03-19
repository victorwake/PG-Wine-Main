const { User, Wine, Favorite } = require("../db.js");

const addWineToFavorites = async (req, res) => {
  const userId = req.params.userId;
  const wineId = req.params.wineId;

  try {
    const user = await User.findByPk(userId);
    const wine = await Wine.findByPk(wineId);

    if (!user || !wine) {
      return res.status(404).json({ message: "Usuario o vino no encontrado" });
    }

    await Favorite.findOrCreate({ where: { userId: userId, wineId: wineId } });

    return res.status(200).json({ message: "Vino agregado a favorites" });
  } catch (error) {
    return res.status(500).json({ message: "error inesperado" });
  }
};

const removeWineFromFavorites = async (req, res) => {
  const userId = req.params.userId;
  const wineId = req.params.wineId;

  try {
    const favorite = await Favorite.findOne({
      where: { userId: userId, wineId: wineId },
    });

    if (!favorite) {
      return res.status(401).json({ msg: `Usuario o vino no encontrado` });
    }

    await favorite.destroy();

    return res.status(200).json({ msg: "Vino eliminado de favoritos" });
  } catch (err) {
    return res.status(400).json({ err: err.message });
  }
};

const getFavoriteWines = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(401).json({ msg: `El usuario no existe` });
    }
    const favorites = await Favorite.findAll({
      where: {
        userId: userId,
      },
      include: Wine.id,
    });

    const respuesta = await Promise.all(
      favorites.map(async (favorite) => {
        const wine = await Wine.findByPk(favorite.wineId);
        return wine;
      })
    );

    return res.status(200).json(respuesta);
  } catch (err) {
    return res.status(400).json({ err: err.message });
  }
};

module.exports = {
  addWineToFavorites,
  removeWineFromFavorites,
  getFavoriteWines,
};
