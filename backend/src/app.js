import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app =express();
const server =createServer(app);
const io = connectToSocket(server);

app.set("port",(process.env.PORT || 8000))
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit: "40kb" , extended:true}));

app.use("/api/v1/users",userRoutes);

// app.get("/home",(req,res)=>{
//   return res.json({"hellow":"world"})
  
// })


const MONGO_URI = "mongodb://videocall_user:tGMgaIiFK84KwJ93@ac-gbgyqvl-shard-00-00.3n9xjbd.mongodb.net:27017,ac-gbgyqvl-shard-00-01.3n9xjbd.mongodb.net:27017,ac-gbgyqvl-shard-00-02.3n9xjbd.mongodb.net:27017/videocall_db?ssl=true&replicaSet=atlas-isx1k1-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
const start = async () => {
  try {

    await mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected");

    
    server.listen(app.get("port"), () => {
      console.log("Server started at port 8000");
    });

  } catch (error) {
    console.log("DB Connection Error:", error);
  }
};

start();



