import consumer from "./consumer"

consumer.subscriptions.create("WelcomeChannel", {
  connected() {
    console.log('Connected')
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log(data)
    var node = document.createElement("DIV");
    var textnode = document.createTextNode(data);
    node.appendChild(textnode);
    document.getElementById("chat").appendChild(node);
  }
});
