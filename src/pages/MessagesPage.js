import Alert from"../components/Alert";

export default function MessagesPage(){
    
    return <>
    <h1>Messages</h1>
    <Alert type="info">You are authenticated. A message read endpoint was not supplied, so this page does not invent one. Connect the real notification API, WebSocket, SSE or push service here when available.</Alert></>}
