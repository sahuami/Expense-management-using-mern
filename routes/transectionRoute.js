const express = require("express")
const { addTransection, getALlTransection,editTransection,
    deleteTransection, } = require("../controllers/transectionController")

// router object
const router = express.Router()

// routes
// add transection post method
router.post('/add-transection', addTransection)
//Edit transection POST MEthod
router.post("/edit-transection", editTransection);
//Delete transection POST MEthod
router.post("/delete-transection", deleteTransection);
// get transection
router.post('/get-transection', getALlTransection)

module.exports = router
