import React, { useState, useEffect, Fragment } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import Chatbox from "../Chatbox/Chatbox";
import Ketik from "../Ketik/Ketik";
import Header from "../Header/Header";
import Kontak from '../Kontak/Kontak'
import "./Chat.css"

let socket; 
const Chat = () => {
  const [name, setName] = useState("depanri purba");
  const [room, setRoom] = useState("room1");
  const [users, setUsers] = useState();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("join", { name, room });
    console.log(name);
  }, [ENDPOINT,name,room])

  useEffect(() => {
    socket.on("pesan", function (data) {
      setMessages([...messages, data]);
    });
  }, [messages, users]);

  const sender = () => {
    socket.emit("kirimpesan", message);
    setMessage("");
  };

  return (
    <Fragment>
      {console.log(name,room)}
      <div className="bagidua">
        <Header />
        <div className="kontak">
          <Kontak />
        </div>
        <div className="bagianchat">
        <Chatbox pesan={messages} nama={name} />
        <Ketik
          pesan={message}
          ubahpesan={(value) => setMessage(value)}
          kirim={sender}
        />
      </div>
      </div>
    </Fragment>
  );
};
export default Chat;
