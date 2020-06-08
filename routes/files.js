const express = require('express');

const router = express.Router();
const upload = require('../middleware/uploads');
const FilesCotroller = require('../controllers/files');


router.post("/", upload.single('file'), FilesCotroller.createFile);
/* router.get("/", getFiles);
router.get("/:fileId", getFile);
router.put("/:fileId", updateFile);
router.delete("/:fileId", deleteFile); */


module.exports = router;
