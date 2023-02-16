const users = [
	{
		id: 1,
		names: 'Ruslan'
	},
	{
		id: 2,
		names: 'Nika'
	},
]

const getUser = (req, res) => {
	console.log(req.params)
	if(req.params.id){
		return res.send(users.find(user => user.id == req.params.id))
	}else if(req.params.names){
		return res.send(users.find(user => user.names.toLowerCase() == req.params.names.toLowerCase()))
	}
	res.send(users)
}

const createUser = (req, res) => {
	const user = req.body
	users.push(user)
	res.send(users)
}

module.exports = {
	getUser,
	createUser
}