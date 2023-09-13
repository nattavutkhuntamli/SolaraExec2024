const router = require('express').Router()
const AdminController = require('../controllers/admin/admin')
const { authMiddleware } = require("../middlewares/authMiddleware");

router.get('/', (req, res) => {
    return res.statusCode(200).send({
        message: 'Welcome to the admin page'
    })
})

router.post('/login',AdminController.LoginAdmin)
router.post('/create',AdminController.Createadmin)
router.put('/update-email/:id',AdminController.EditEmail)
router.put('/update-name/:id',AdminController.EditFullname)
router.put('/update-phone/:id',AdminController.EditFullname)
router.put('/edit-password/:id',AdminController.EditPassword)
// router.post('/create',authMiddleware,AdminController.Createadmin)
module.exports = router