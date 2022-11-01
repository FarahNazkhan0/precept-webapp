import { useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

const WebSocketConnection = (username, password) => {

    document.cookie = username+password
    
//     const client = new W3CWebSocket("wss://workbook.precept.cloud", ["A71IkUY5fVVgNBz1sXxMoI4MjzCYEHzp", username, password])
    const client = new W3CWebSocket("ws://localhost:8080")

    client.onerror = (errEvent) => {
      alert("Error occurred "+errEvent.message);
      console.log(errEvent)
    }
    client.onopen = (openEvent) => {
      alert("Socket Opened");
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (messageEvent) => { 
        alert("DATA RECEIVED:\n\n" + messageEvent.data)
    }
    client.onclose = (closeEvent) => {
      alert("Socket Closed")
      console.log('Connection closed');
    };

}

export default WebSocketConnection
