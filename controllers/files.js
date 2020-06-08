/**
 * Controllers for :
 * 
 * getFiles
 * getFile,
 * createFile,
 * updateFile,
 * deleteFile
 */
const File = require('./../models/file.model');
class FileContoller {
    createFile() {
        (req, res) => {
            if (typeof req.file == undefined) {
                return res.status(400).json('error1')
            } else {
                const file = new File({
                title: req.file.path,
                fileURL: req.file.path
            });
            file.save()
            .then((result) => {
                const response = {
                    status: true,
                    message: 'File uploaded.'
                }
                res.status(201).json(response)
            }).catch((err) => {
                res.status(400).json(err)
            });
            }
        };

    }

}

module.exports = new FileContoller();