const express = require('express');
const {
  getFiles,
  getFile,
  createFile,
  updateFile,
  deleteFile
} = require('../controllers/files');

const router = express.Router();
const upload = require('./../middleware/uploads');


router.post("/", upload.single('file'), createFile);
router.get("/", getFiles);
router.get("/:fileId", getFile);
router.put("/:fileId", updateFile);
router.delete("/:fileId", deleteFile);


module.exports = router;
