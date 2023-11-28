const { registration, login, getUsers } = require("../controllers/auth");

const router = require("express").Router()

router.post("/registration", registration);
router.post("/login", login);

module.exports = router;