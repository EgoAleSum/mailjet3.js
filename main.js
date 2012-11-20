var request = require('request');

var Mailjet = function(options){
    options = copy(options)

    this.init(options)
}

Mailjet.prototype.init = function(options) {
    var self = this

    if (!options) options = {}

    if (!options.apikey || !options.apisecret){
        console.error('Usage: var mailjet = new Mailjet({apikey:"APIKEY", apisecret:"API_SECRET"})');
    }

    if (process.env.NODE_DEBUG && /mailjet/.test(process.env.NODE_DEBUG)) console.error('REQUEST', options)


}