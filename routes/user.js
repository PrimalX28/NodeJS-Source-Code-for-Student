// const express = require("express");
// const router = express.Router();

const router = require('express').Router();
const controller = require('../controllers/user');

router.route("/")
    .get(controller.all)
    .post(controller.add)


router.route("/:id")
    .get(controller.get)
    .patch(controller.patch)
    .delete(controller.drop)

// router.get("/", (req, res) => {
//     res.json({
//         msg: "All users"
//     })
// })

// router.get("/:id", (req, res) => {
//     let id = req.params.id;
//     res.json({ msg: "The request id is " + id })
// })

// router.post("/", (req, res) => {
//     res.json(req.body)
// })

// router.patch("/:id", (req, res) => {
//     let id = req.params.id;
//     res.json({
//         msg: "Edit id is " + id,
//     })
// })

// router.delete("/:id", (req, res) => {
//     let id = req.params.id;
//     res.json({
//         msg: "Delete is is " + id
//     })
// })

module.exports = router;