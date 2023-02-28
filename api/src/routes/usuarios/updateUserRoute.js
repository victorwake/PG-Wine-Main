const { Router } = require("express");
const { updateUser } = require("../../controllers/updateUsersControllers");
const router = Router();

router.put("/usuarios/:id", updateUser);

module.exports = router;
