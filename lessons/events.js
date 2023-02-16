const Emitter = require('lessons/events')

const emitter = new Emitter()

emitter.on('message', (data, second, third) => {
	console.log(`Вы прислали сообщение ${data}`)
	console.log(`Второй аргумент ${second}`)
	console.log(`Третий аргумент ${second}`)
})

const MESSAGE = process.env.MESSAGE || ''

if(MESSAGE){
	emitter.emit('message' , MESSAGE, 123, 456)
}else {
	emitter.emit('message' , MESSAGE, 'Вы не прислали сообщение')
}

// Когда использовать ?
// http
// websockets
// long pulling
// clusters