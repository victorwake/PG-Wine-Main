const { User, Wine } = require('../db.js');


// const addReviewToWine = async (req, res) => {
//     const userId = req.params.userId;
//     const wineId = req.params.wineId;

//     try {
//         const user = await User.findByPk(userId);
//         const wine = await Wine.findByPk(wineId);

//     if (!user || !wine) {
//         return res.status(404).json({ message: 'Usuario o vino no encontrado' });
//     }

    // await user.addWine(wine);

    // return res.status(200).json({ message: 'Vino agregado a favorites' });
    // } catch (error) {
    // return res.status(500).json({ message: 'error inesperado' });
    // }
//      await Review.findOrCreate({where:{ userId: userId, wineId: wineId }});

//         return res.status(200).json({ message: 'Vino puntuado' });
//     } catch (error) {
//         console.log(error)
//         return res.status(500).json({ message: 'error inesperado' });
//     }
// }

// const addReviewToWine = async (req, res) => {
//     const { rating, comment, wineId } = req.body;

//     const review = {
//         user: req.userId,
//         name: req.user.name,
//         rating: Number(rating),
//         comment
//     }

//     const wine = await Wine.findByPk(wineId);

//     const isReviewed = wine.reviews.find(
//         r => r.user.toString()=== req.userId.toString()
//     )

//     if(isReviewed) {
//         wine.reviews.forEach(review => {
//             if(review.user.toString() === req.userId.toString()){
//                 review.comment = comment;
//                 review.rating = rating;
//             }
//         })
//     } else {
//         wine.reviews.push(review);
//         wine.numOfReviews = wine.reviews.length
//     }
//     wine.ratings = wine.reviews.reduce((acc, item)=> item.rating + acc, 0) / wine.reviews.length

//     await wine.save()

//     res.status(200).json({success: true})
// }

const addReviewToWine = async (req, res) => {
    const { rating, comment, wineId } = req.body;
  
    try {
      // Find the wine to review
      const wine = await Wine.findByPk(wineId);

      console.log(wine.reviews)
  
      if (!wine) {
        return res.status(404).json({ success: false, error: 'Wine not found' });
      }
  
      // Find the user who is making the review
      const user = await User.findByPk(req.userId);
  
      if (!user) {
        return res.status(404).json({ success: false, error: 'User not found' });
      }
  
      // Check if the user has already reviewed this wine
      const existingReview = wine.reviews.find(review => review.user.toString() === req.userId.toString());
  
      // If the user has already reviewed the wine, update the review
      if (existingReview) {
        existingReview.comment = comment;
        existingReview.rating = Number(rating);
      } else {
        // If the user has not reviewed the wine, add a new review
        const newReview = {
          user: req.userId,
          name: user.name,
          rating: Number(rating),
          comment,
        };
  
        wine.reviews.push(newReview);
      }
  
      // Update the wine's ratings and number of reviews
      const numOfReviews = wine.reviews.length;
      const ratingsSum = wine.reviews.reduce((acc, review) => acc + review.rating, 0);
      const ratingsAverage = ratingsSum / numOfReviews;
  
      wine.numOfReviews = numOfReviews;
      wine.ratings = ratingsAverage;
  
      // Save the changes to the wine
      await wine.save();
  
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, error: 'Server error' });
    }
  };

const removeReviewToWine = async (req, res) => {
    const userId = req.params.userId;
    const wineId = req.params.wineId;
    
    // try {
    //     const user = await User.findByPk(userId);
    //     const wine = await Wine.findByPk(wineId);

    //     if (!user||!wine) {
    //         return res.status(401).json({ msg: `Usuario o vino no encontrado`, });
    //     }
    //     await user.removeWine(wine);

    //     return res.status(200).json({ msg: 'Vino eliminado de favoritos' });
    //     } catch (err) {
    //     return res.status(400).json({ err: err.message });
    //     }
    try {
        const review = await Review.findOne({ where: { userId: userId, wineId: wineId } });

        if (!review) {
            return res.status(401).json({ msg: `Usuario o vino no encontrado`, });
        }

        await review.destroy();

        return res.status(200).json({ msg: 'Reseña eliminada' });
    } catch (err) {
        return res.status(400).json({ err: err.message });
    }
}

// const getFavorites = async (req, res) => {
//     const { userId } = req.params;
//     try {
//         const user = await User.findByPk(userId);
//         if (!user) {
//             return res.status(401).json({ msg: `El usuario no existe`, });
//         }
//         const favorites = await user.getWines();
//         return res.status(200).json(favorites);
//         } catch (err) {
//         return res.status(400).json({ err: err.message });
//         }
// }
const getReviewWines = async (req, res) => {
    

    const userId = req.params.userId;
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(401).json({ msg: `El usuario no existe`, });
        }
        const reviews = await Review.findAll({
            where: {
                userId: userId,
            },
            include: Wine.id,
        });

        const respuesta = await Promise.all(reviews.map(async (review) => {
            const wine = await Wine.findByPk(review.wineId);
            return wine;
        }));

        return res.status(200).json(respuesta);
        } catch (err) {
        return res.status(400).json({ err: err.message });
        }
}


module.exports = { 
    addReviewToWine, 
    removeReviewToWine, 
    getReviewWines
};