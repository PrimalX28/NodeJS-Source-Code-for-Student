// const express = require("express");
// const router = express.Router();

const router = require('express').Router();

router.route("/")
    .get((req, res) => res.json({ msg: "All users" }))
    .post((req, res) => res.json(req.body))


router.route("/:id")
    .get((req, res) => res.json({ msg: "The request id is " + req.params.id }))
    .patch((req, res) => res.json({ msg: "Edit id is " + req.params.id }))
    .delete((req, res) => res.json({ msg: "Delete id is " + req.params.id }))

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