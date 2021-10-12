const socket = io();

socket.on("message", (data) => {
  console.log(data);
  render(data);
  socket.emit("message-client", "Muchas gracias por su respuesta");
});

const render = (data) => {
  let html = data
    .map((x) => {
      return ` <div class="containerText">
								<h3>${x.user}</h3>
								<p>${x.msn}</p>
							</div>`
    })
    .join("");
  document.querySelector("#box").innerHTML = html;
};

const addMsn = () => {
  let msg = {
    user: document.querySelector("#user").value,
    msn: document.querySelector("#msn").value,
  };
	let ms = document.querySelector("#msn").value = " "

	if(msg.user.length > 0){
		let name = document.querySelector("#user")
	}
  socket.emit("new-message", msg);
  return false;
};
