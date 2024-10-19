require('dotenv').config()

const path = require('path')
const express = require('express');
const app = express();
app.use(express.json());


const mongoose = require('mongoose');
const fileUpload = require("express-fileupload");
app.use(fileUpload())

mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);

const userRoute = require('./routes/user');
const postRoute = require('./routes/post');


const { saveFile, saveFiles, deleteFile } = require("./utils/gallery")


// app.post("/gallery", saveFiles, async (req, res, next) => {
//     res.status(200).json({ msg: "File Uploaded", filenames: req.body.images })
// })

app.post("/gallery", deleteFile, async (req, res, next) => {
    res.status(200).json({ msg: "File Deleted" })
})

app.use("/uploads", express.static(path.join(__dirname, 'uploads')))
app.use("/users", userRoute);
app.use("/posts", postRoute);



app.use((err, req, res, next) => {
    err.status = err.status || 200;
    res.status(err.status).json({
        con: false,
        msg: err.message
    })
})


app.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}`);
});
