const controllers = require("../controllers/seriesControllers")



const express = require("express")
const router = express.Router()

router.get("/", controllers.home)
router.get("/todos", controllers.getAll)
router.get("/titulo", controllers.getByTitle)
router.get("/genero", controllers.getByGenero)
router.get("/:id", controllers.getById)


module.exports = router