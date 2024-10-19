const fs = require("fs");

const saveFile = async (req, res, next) => {
    let file = req.files.file;
    let filename = new Date().valueOf() + "_" + file.name;
    file.mv(`./uploads/${filename}`);
    req.imageName = filename;
    req.body["image"] = filename;
    next();
}

const saveFiles = async (req, res, next) => {
    let filenames = [];
    let files = req.files.files;
    files.forEach((file) => {
        let filename = new Date().valueOf() + "_" + file.name;
        file.mv(`./uploads/${filename}`)
        filenames.push(filename)
    });
    req.body["images"] = filenames.join(",");
    next();
}

const deleteFile = async (filename) => {
    console.log(filename)
    fs.unlinkSync(`./uploads/${filename}`);
}

// const deleteFile = async (filename) => {
//     await fs.unlink(`./uploads/${filename}`, (err) => {
//         if (err) {
//             if (err.code === 'ENOENT') {
//                 console.error('File not found');
//             } else {
//                 console.error(`Error occurred while deleting file: ${err.message}`);
//             }
//         } else {
//             console.log('File deleted successfully');
//         }
//     });
// };

module.exports = { saveFile, saveFiles, deleteFile }