var Mailjet = require('../main')

var config = require('./config')

var mj = new Mailjet(config.apiKey, config.apiSecret)
mj.send({
	from: 'sender@example.com',
	to: 'user@example.com',
	subject: 'test email',
	text: 'test!!'
})
