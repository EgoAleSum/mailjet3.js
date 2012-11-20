Mailjet Nodejs library
======================

Installation
-----------

`npm install mailjet`

Usage
-----

load the mailjet library with:

`mailjet = require('mailjet');`

initialize mailjet with the init function and your API keys like this:

`mailjet.init('API_KEY', API_SECRET');

You can then make requests like this :

    mailjet.request('messageCampaigns', {id: 3245}, 'GET', function(error, response, body) {
        console.log(body);
    });