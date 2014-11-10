mailjet3.js
===========

[![Tip](https://img.shields.io/gratipay/EgoAleSum.svg?style=flat)](https://gratipay.com/EgoAleSum)
[![NPM](https://img.shields.io/npm/v/mailjet3.svg?style=flat)](https://www.npmjs.org/package/mailjet3)
[![Dependency Status](https://david-dm.org/egoalesum/mailjet3.js.svg?style=flat)](https://david-dm.org/egoalesum/mailjet3.js)

Fork of [node-mailjet](https://github.com/mailjet/node-mailjet) that supports API v3.

Installation
------------

    npm install mailjet3

Usage
-----

Load the `mailjet` module with:

	var Mailjet = require('mailjet3')

Initialize mailjet with your API keys:

	var mj = new Mailjet('API_KEY', 'API_SECRET')

You can then make requests like this :

	mj.request(APIMethod, type, params, successCb, errorCb)

There is a short-hand method for sending transactional emails:

	mj.send(params, successCb, errorCb)


License
-------

mailjet.js is licensed under the MIT License. See [LICENSE](LICENSE.md).
