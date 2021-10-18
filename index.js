const socket = new WebSocket('wss://xa4h4ybrc6.execute-api.us-east-1.amazonaws.com/dev')

socket.addEventListener('open', e => {
  console.log('WebSocket is connected', e)
})

socket.addEventListener('close', e => console.log('WebSocket is closed'))

socket.addEventListener('error', e => console.error('WebSocket is in error', e))

socket.addEventListener('message', e => {
  // console.log('WebSocket received a message:', e)
  if(e.data){

    console.log('Your answer is:', JSON.parse(e.data).message)
  }
})

window.ask = function (msg,ConnectionId) {
  const payload = {
    action: 'message',
    msg,
    ConnectionId
  }
  console.log(payload);
  socket.send(JSON.stringify(payload))
}

window.send = function (msg,ConnectionId) {
  const payload = {
    action: 'send',
    msg,
    ConnectionId
  }
  console.log(payload);
  socket.send(JSON.stringify(payload))
}