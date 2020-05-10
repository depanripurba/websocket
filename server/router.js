const express = require("express");
const multer = require("multer");
const router = express.Router();
var namafile
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/')
    },
    filename: function(req, file, cb){
        console.log(req)
        console.log('wkwkwkwk anda telah kena hack')
        console.log(file.mimetype)
        const pecahnama = file.mimetype.split('/')
        console.log(pecahnama[1])
        namafile = file.fieldname + Date.now() + '.' + pecahnama[1]
        cb(null,namafile)
    }
})
upload = multer({storage:storage})
// bagian route utama
router.get("/", (req, res) => {
  res.send("Server is Up and Running");
});
//bagian hanya mengambil nama
router.post("/ambilnama",(req,res) => {
    console.log(req.body)
})
// bagian route untuk upload file
router.post("/upload", upload.single("gambar"),(req, res, next) => {
   
    res.send({
       data:'true',
       pesan: namafile
   })
});
module.exports = router;
