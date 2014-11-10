var request = require('request')

function Mailjet(apiKey, apiSecret) {
	this.apiBaseUrl = 'https://api.mailjet.com/v3/'
	
	if(!apiKey || !apiSecret){
		return new Error('Usage: var mailjet = new Mailjet({apikey:"APIKEY", apisecret:"API_SECRET"})')
	}
	
	var auth = "Basic " + new Buffer(apiKey + ":" + apiSecret).toString("base64")
	this.authHeaders = {'Authorization': auth}
}

Mailjet.prototype.request = function(APIMethod, type, params, successCb, errorCb) {
	if(!type) {
		type = 'GET'
	}
	type = type.toUpperCase()

	if(!params) {
		params = {}
	}
	
	// Querystring params
	var qs = {}
	if(type == 'GET') {
		qs = params
		params = false
	}
	qs.output = 'json'
	
	var url = this.apiBaseUrl + APIMethod
	
	var headers = this.authHeaders
	
	var options = {
		method: type,
		uri: url,
		headers: headers,
		qs: qs,
	}
	
	if(params) {
		options.params = params
	}
	
	request(options, function(err, response, body) {
		if(!err && response.statusCode == 200) {
			if(successCb) successCb(JSON.parse(body))
			return
		}
		else {
			if(errorCb) errorCb(err, JSON.parse(body))
			return
		}
	})
}

// Send transactional emails
/* params is an object:
	Required:
		from, to, subject
	One of:
		html, text
	Optional:
		cc, bcc,
		attachment, inlineattachment,
		header,
		mj-prio, mj-campaign, mj-deduplicatecampaign, mj-trackopen, mj-trackclick
*/
Mailjet.prototype.send = function(params, successCb, errorCb) {
	if(!params.from || !params.to || !params.subject) {
		return new Error('Arguments from, to and subject are required')
	}
	if((!params.html && !params.text) || (params.html && params.text)) { // XOR
		return new Error('You must specify one and only one of contents.html and contents.text')
	}
	
	this.request('send/message', 'POST', params, successCb, errorCb)
}

module.exports = Mailjet
