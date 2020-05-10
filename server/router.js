const express = require("express");
const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/')
    },
    filename: function(req, file, cb){
        cb(null,'depanripurba'+'.png')
    }
})
upload = multer({storage:storage})
// bagian route utama
router.get("/", (req, res) => {
  res.send("Server is Up and Running");
});
// bagian route untuk upload file
router.post("/upload", upload.single("gambar"),(req, res, next) => {
   res.send({
       data:'true',
       pesan:'gambar berhasil di upload'
   })
});
module.exports = router;
