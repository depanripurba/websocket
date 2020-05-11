const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const mysql = require("mysql");
const router = require("./router");
const cors = require('cors')
const bodyParser = require('body-parser')

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "biochat",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
}); 

const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const { addUser, removeUser, getUser, getUsersInRoom } = require("./user.js");
jumlah = [];

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }) => {
    //user baru di hitung
    jumlah.push(socket);
    console.log(jumlah.length + "sedang terhubung");
    console.log(room,name)
    const { user } = addUser({ id: socket.id, name, room });
    // daftarkan user ke soket aktif
    // socket.join(user.room);
    // kirim balik pesan
    socket.emit("pesan", {
      user: `admin`,
      text: `${user.name} selamat datang di room chat`,
    });
    socket.broadcast
      .to(user.room)
      .emit("pesan", { user: "admin", text: `${user.name} has joind` });
  });
  socket.on('gabung',({tujuan})=>{
    console.log(tujuan)
  })
  socket.on('upload',({data})=>{
    console.log(data)
    console.log('pesan ini sedang diakses')
  })
  socket.on("login", ({ email, password }) => {
    let sql = `SELECT*FROM user WHERE ?`;
    console.log(email, password);
    let cek = true
    db.query(sql,{email:email}, function (err, result) {
      if (err) throw err;
      result.map((data) => {
        if (data.email === email) {
          if(password===data.password){
            socket.emit('konfirmasi',{data:true,kode:1,pesan:'anda bisa masuk ke dalam sistem'})
            cek = false
          }else{ 
            socket.emit('konfirmasi',{data:false,kode:2,pesan:'password yang anda masukkan salah'})
            console.log(data)
            cek = false
          }
        }else if(data = null){
          socket.emit('konfirmasi',{data:false,kode:3,pesan:'data anda tidak terdaftar di dalam sistem kami'})
          console.log(data)
          cek = false
        }else{
          console.log("ini sudah keterlaluan")
        }
        console.log(data)
      });
      if(cek)
      socket.emit('konfirmasi',{data:false,kode:3,pesan:'Data anda tidak terdaftar di sistem kami\nSilahkan anda registrasi dulu'})
    });
  });
  socket.on('registrasi',function(tes){  
    db.query("INSERT INTO user SET ?",{
      id : "",
      email:tes.email,
      password:tes.password,
      status:'',
      nama:tes.nama,
      alamat:tes.alamat,
      gender:tes.jenisKelamin
  },(err,fields)=>{
      if(err) throw err
      socket.emit('resregister',{data:'true',pesan:'user baru berhasil di tambahkan'})
  })
   
    
  })
  socket.on("kirimpesan", function (pesan) {
    const user = getUser(socket.id);
    io.to(user.room).emit("pesan", { user: user.name, text: pesan });
    console.log(user);
  });
  socket.on("disconnect", (name) => {
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.room).emit("pesan", {
        user: "admin",
        text: `${user.name} has leaf`,
      });
      console.log(`${user.name} keluar`);
    }

    jumlah.splice(jumlah.indexOf(socket), 1);
    console.log(name + " keluar =>" + jumlah.length + "sedang  konek");
  });
});
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())
app.use(router);
server.listen(PORT, () => console.log(`Server is running in Port ${PORT}`));
