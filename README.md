Mailjet Nodejs library
======================

Installation
-----------

    npm install EgoAleSum/node-mailjet

Usage
-----

Load the `mailjet` module with:

	var Mailjet = require('mailjet')

Initialize mailjet with your API keys:

	var mj = new Mailjet('API_KEY', 'API_SECRET')

You can then make requests like this :

	mj.request(APIMethod, type, params, successCb, errorCb)

There is a short-hand method for sending transactional emails:

	mj.send(params, successCb, errorCb)


License
-------

node-mailjet is licensed under the MIT License. (See [LICENSE](LICENSE.md))
