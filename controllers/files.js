/**
 * Controllers for :
 * 
 * getFiles
 * getFile,
 * createFile,
 * updateFile,
 * deleteFile
 */
const File = require('../models/file');
    exports.createFile =  (req, res) => {
            if (typeof req.file == "undefined") {
                return res.status(400).json({
                    status: false,
                    message: 'Please select a file'
                })
            } else {
                const file = new File({
                title: req.file,
                fileURL: req.file
            });
            file.save()
            .then((result) => {
                const response = {
                    status: true,
                    message: 'File uploaded.'
                }
                res.status(201).json(result)
            }).catch((err) => {
                res.status(400).json(err)
            });
            }
        };


