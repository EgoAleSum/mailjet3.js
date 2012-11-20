var request = require('request');

var Mailjet = function(options){

    this.apiBaseUrl = 'https://api.mailjet.com/0.1/';
    if (options) {
        this.init(options);
    }
};

Mailjet.prototype.init = function(options) {

    if (!options) options = {}

    if (!options.apikey || !options.apisecret){
        console.error('Usage: var mailjet = new Mailjet({apikey:"APIKEY", apisecret:"API_SECRET"})');
    }

    this.options = options;
    var auth = "Basic " + new Buffer(options.apikey + ":" + options.apisecret).toString("base64");
    this.authHeaders = {'Authorization': auth}


}

Mailjet.prototype.request = function(APIMethod, params, type, cb) {
    if (!type) {
        type = 'GET';
    }

    var url = this.apiBaseUrl + APIMethod;

    var headers = this.authHeaders;

    options = {
        method: type,
        uri: url,
        json: params,
        headers: headers,

    };

    return request(options, cb(error, response, body));

}


