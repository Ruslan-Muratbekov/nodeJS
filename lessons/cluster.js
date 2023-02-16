const os = require('lessons/os')
const cluster = require('lessons/cluster')

// console.log(os.platform())
// console.log(os.arch())
// console.log(os.cpus())

const cpus = os.cpus()

if (cluster.isMaster) {
	for (let i = 0; i < 1; i++) {
		cluster.fork()
	}
	cluster.on('exit', (worker, code, signal) => {
		console.log(worker)
		console.log(code)
		console.log(signal)
		console.log(`Воркер с pid = ${worker.process.pid} умер`)
		cluster.fork()
	})
}else {
	console.log('Воркер с pid= ' + process.pid + ' запущен')

	setInterval(() => {
		console.log('Воркер с pid= ' + process.pid + ' все еще работает')
	}, 5000)
}