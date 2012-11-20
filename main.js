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


};

Mailjet.prototype.request = function(APIMethod, type, params) {
    if (!type) {
        type = 'GET';
    }

    if (!params) {
        params = {};
    }


    var cbs = {
        success: params.success,
        error: params.error,
    }

    delete params.success;
    delete params.error;

    var qs = {};

    if(type.toLowerCase() == 'get') {
        qs = params;
        params = false;
    }

    qs.output = 'json';

    var url = this.apiBaseUrl + APIMethod;

    var headers = this.authHeaders;

    options = {
        method: type,
        uri: url,

        headers: headers,
        qs: qs,
    };

    if (params) {
        options.params = params;
    }




    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            return cbs.success(JSON.parse(body));
        } else {
            return cbs.error(error, JSON.parse(body));
        }
    });


};


module.exports = Mailjet;

