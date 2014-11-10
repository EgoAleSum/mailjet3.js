var Mailjet = require('../main')

var config = require('./config')

var mj = new Mailjet(config.apiKey, config.apiSecret)
mj.send({
	from: 'test@me.com',
	to: 'test@gmail.com',
	subject: 'test email',
	text: 'test!!'
})
