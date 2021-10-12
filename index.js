const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const io = require("socket.io")(server)
const port = process.env.PORT || 3005
const router = require("./routes/index")

//static
app.use(express.static(__dirname + "/public"))


//router
app.use("/api", router)


let mess = []

io.on("connection", (socket)=>{
	console.log("User connected")
	socket.emit("message", mess)

	socket.on("message-client", (data)=>{
	console.log(data)
	})
	socket.on("new-message", function(data){
	console.log(data)
	mess.push(data)
	io.sockets.emit("message", mess)
	//socket.emit()
	})
})


server.listen(port, ()=>{
  console.log("server on port " + port)
})