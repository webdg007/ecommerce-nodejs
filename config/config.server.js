require('dotenv').config()

let serverPort = 4500;

if(process.env.NODE_ENV !== 'production'){
	serverPort = process.env.PORT
}

module.exports = {
	serverPort: serverPort,
	env:process.env.NODE_ENV
}