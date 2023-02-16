const path = require('lessons/path')

console.log('Склеить участок пути:', path.join(__filename))

// лучше использовать join так как она скливает пути учитывая OC например в linux / а в windows \ и join это учитывает

const fullpath = path.resolve(__dirname, 'first', '..', 'second', 'third.js')
// resolve не советуют использовать если не знаете как она работает
console.log('Парсинг пути:', path.parse(path.join(__filename)))
console.log('разделитель в OS:', path.sep)
console.log('Проверка на абсолютный путь:', path.isAbsolute('first/second'))
console.log('Название файла:' , path.basename(fullpath))
console.log('расширение файла:', path.extname(fullpath))
console.log(fullpath)
const url = 'http://localhost:3000/users?id=503423&names=ruslan'

console.log(new URL(url))
