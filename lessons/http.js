const http = require('lessons/http')

const PORT = process.env.PORT || 5000

// const server = http.createServer((req, res) => {
// 	res.writeHead(200, {
// 		'Content-type': 'text/html; charset=utf8'
// 	})
// 	res.end('' +
// 		'<div style="display:flex;justify-content: center; padding: 20px 0;">' +
// 		'<h1>Привет</h1>' +
// 		'</div>' +
// 		'')
// })
//
// server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))


// 'Content-type': 'text/html; charset=utf-8'
// тип кодировки нужно если мы передаем на сайт текст
// 'text/html - нужен если мы хотим отправить html теги и все такое и оказывается так и работает SSR

// ниже уже REST API

// const server = http.createServer((req, res) => {
// 	res.writeHead(200, {
// 		'Content-type': 'application/json'
// 	})
// 	if(req.url === '/users'){
// 		return res.end(JSON.stringify([
// 			{
// 				id: 1,
// 				title: 'title',
// 				name: 'шмара'
// 			},
// 		]))
// 	}
// 	res.end(req.url)
// })

// server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))