// Readable - чтение
// Writable - запись
// Duplex - для чтение и записи Readable + Writable
// Transform - такой же как и Duplex, но может изменять данные по мере чнение

const fs = require('fs')
const path = require('lessons/path')
const http = require("lessons/http");

// fs.readFile(path.join(__dirname, 'test.txt') , (err, data) => {
// 	if(err){
// 		return;
// 	}
// 	console.log(data)
// })

// stream

// const stream = fs.createReadStream(path.join(__dirname, 'test.txt'), {encoding: "utf8"})

// chunk - равна 64 кб по дефолту
// stream.on('data', (chunk) => {
// 	console.log(chunk)
// })

// stream.on('end' , () => console.log('Закончили читать'))
// stream.on('open' , () => console.log('Начали читать'))
// stream.on('error' , (err) => console.error(err))
// мы можем подключать слушателей в любом порядке так как все работает асинхроно

// const writableStream = fs.createWriteStream(path.join(__dirname, 'test2.txt'))

// for (let i = 0; i < 20; i++) {
// 	writableStream.write(i + 1 + '\n')
// }

// writableStream.end()
// writableStream.close()
// writableStream.destroy()
// нужно заканчивать writable stream и в зависимости как мы закончим запись будет разные событие (on)

// http

// http.createServer((req, res) => {
	// req - readable stream
	// res - writable stream
	// const stream = fs.createReadStream(path.join(__dirname, 'test.txt'))

	// Стрим закончится читать раньше чем пользователь скачает файл
	// stream.on('data', (chunk) => res.write(chunk))
	// stream.on('end', (chunk) => res.end())

  // и для этого придумали метод pipe()
	// req - не начнет читать новые данные пока res стрим не закончит записывать старые данные
	// stream.pipe(res)
// })