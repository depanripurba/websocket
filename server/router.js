const express = require("express");
const multer = require("multer");
const router = express.Router();
var user
var namafile
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/') 
    },
    filename: function(req, file, cb){ 
        const pecahnama = file.mimetype.split('/')
        namafile = user + '.' + pecahnama[1]
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
    console.log(req.body.nama)
    user = req.body.nama
})
// bagian route untuk upload file
router.post("/upload", upload.single("gambar"),(req, res, next) => {
   console.log(req.body)
   

    res.send({
       data:'true',
       pesan: namafile
   })
});
module.exports = router;
