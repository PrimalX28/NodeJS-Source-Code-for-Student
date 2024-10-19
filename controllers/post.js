const DB = require("../dbs/post");
const Helper = require("../utils/helper")

const all = async (req, res, next) => {
    let post = await DB.find().populate("user", "-password -__v");
    Helper.fMsg(res, "Get all Post", post)
};

const get = async (req, res, next) => {
    let post = await DB.findById(req.params.id).populate("user");
    if (post) {
        Helper.fMsg(res, "Get single post", post)
    } else {
        next(new Error("No post with that id"))
    }
}

const post = async (req, res) => {
    let post = await new DB(req.body).save();
    Helper.fMsg(res, "Add new Post", post)
}

const patch = async (req, res) => {
    res.json({
        msg: "Patch post"
    })
}
const drop = async (req, res) => {
    res.json({
        msg: "Delete post"
    })
}

module.exports = {
    all,
    get,
    post,
    patch,
    drop
}