const fs = require('fs')
const path = require('lessons/path')

// console.log('START')
//
// fs.mkdir(path.join(__dirname, 'store', 'reducers'), {recursive: false}, (err) => {
// 	if(err){
// 		console.log(err)
// 		return;
// 	}
// 	console.log('папка создана')
// })
//
// если нужно создать вложеные папки то нужно добавить параметр {recursive: true}
//
// console.log('END')

// fs.rmdir(path.join(__dirname, 'store', 'reducers'), (err) => {
// 	if (err) {
// 		console.log('Такого файла нету')
// 		return;
// 	}
// 	console.log('удаленно успешно')
// })

// fs.writeFile(path.join(__dirname, 'store', 'index.js'), 'console.log("10")', (err) => {
// 	if (err) {
// 		console.log('Ошибка')
// 		return;
// 	}
// 	console.log('успешно создали файл и записали данные')
// })

// создает файл и записывает данные и даже код но если в этом файле были другие данные то все удалится и запишется новые данные

// fs.appendFile(path.join(__dirname, 'store', 'index.js'), '', (err) => {
// 	if (err) {
// 		console.log('error')
// 		return
// 	}
// 	console.log('write new world')
// })

// const writeFileAsync = async (path, data) => {
// 	return new Promise((resolve, reject) => {
// 		fs.writeFile(path, data, (err) => {
// 			if (err) {
// 				return reject(err.message)
// 			}
// 			resolve('успешно')
// 		})
// 	})
// }

// const appendFileAsync = async (path, data) => {
// 	return new Promise((resolve, reject) => {
// 		fs.appendFile(path, data, (err) => {
// 			if (err) {
// 				return reject(err.message)
// 			}
// 			resolve('успешно')
// 		})
// 	})
// }

// const readFileAsync = async (path) => {
// 	return new Promise((resolve, reject) => {
// 		fs.readFile(path, {encoding: "utf8"}, (err, data) => {
// 			if (err) {
// 				return reject(err.message)
// 			}
// 			resolve(data)
// 		})
// 	})
// }

// const removeFileAsync = async (path) => {
// 	return new Promise((resolve, reject) => {
// 		fs.rm(path, (err) => {
// 			if (err) {
// 				return reject(err.message)
// 			}
// 			resolve("Успешно удалили")
// 		})
// 	})
// }

// const removeDirFileAsync = async (path) => {
// 	return new Promise((resolve, reject) => {
// 		fs.rmdir(path, (err) => {
// 			if (err) {
// 				return reject(err.message)
// 			}
// 			resolve("Успешно удалили")
// 		})
// 	})
// }

// fs.rm() - удаление файла
// fs.rmdir() - удаление папки

// writeFileAsync(path.join(__dirname, 'store', 'index.txt'), 'привет ')
// 	.then(() => appendFileAsync(path.join(__dirname, 'store', 'index.txt'), 'привет 2 '))
// 	.then(() => appendFileAsync(path.join(__dirname, 'store', 'index.txt'), 'привет 3 '))
// 	.then(() => appendFileAsync(path.join(__dirname, 'store', 'index.txt'), 'привет 4 '))
// 	.then(() => appendFileAsync(path.join(__dirname, 'store', 'index.txt'), 'привет 5 '))
// 	.then(() => readFileAsync(path.join(__dirname, 'store', 'index.txt')))
// 	.then(data => console.log(data))
// 	.then(() => removeFileAsync(path.join(__dirname, 'store', 'index.txt')))
// 	.then(() => removeFileAsync(path.join(__dirname, 'store', 'index.js')))
// 	.then(() => removeDirFileAsync(path.join(__dirname, 'store', 'reducers')))

const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias architecto at atque deleniti doloribus est excepturi fugit ipsa iste, molestiae nemo non, nostrum omnis, quos reiciendis suscipit temporibus vel!'

const writeFileAsync = async (path, data) => {
	return new Promise((resolve, reject) => {
		fs.writeFile(path, `${data}`, (err) => {
			if (err) {
				reject(err.message)
				return;
			}
			resolve('Успешно!')
		})
	})
}

const readFileAsync = async (path, data) => {
	return new Promise((resolve, reject) => {
		fs.readFile(path, {encoding: "utf8"}, (err, data) => {
			if (err) {
				reject(err.message)
				return;
			}
			resolve(data.length)
		})
	})
}

const removeFileAsync = async (path) => {
	return new Promise((resolve, reject) => {
		fs.rm(path, (err) => {
			if (err) {
				reject(err.message)
				return;
			}
			resolve('Успешно!')
		})
	})
}

// writeFileAsync(path.join(__dirname, 'store', 'text.txt'), text)
// 	.then(() => {
// 		readFileAsync(path.join(__dirname, 'store', 'text.txt'))
// 			.then(data => {
// 				writeFileAsync(path.join(__dirname, 'store', 'count.txt'), data)
// 				removeFileAsync(path.join(__dirname, 'store', 'text.txt'))
// 			})
// 	})