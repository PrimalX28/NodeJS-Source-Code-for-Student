const all = async (req, res, next) => {
    res.json({
        msg: "All posts"
    })
};

const get = async (req, res) => {
    res.json({
        msg: "Single post"
    })
}

const post = async (req, res) => {
    res.json({
        msg: "Add new Post",result:req.body
    })
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