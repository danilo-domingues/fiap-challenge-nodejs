const router = require("express").Router();
const controller = require("../controllers/teste-controller");



router.get('/test/teste', controller.getTest);


module.exports = router;