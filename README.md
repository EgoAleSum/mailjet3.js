[API v1] Mailjet Nodejs library
======================

Installation
-----------

    npm install mailjet

Usage
-----

load the mailjet library with:

    mailjet = require('mailjet');

initialize mailjet with the init function and your API keys like this:

    mailjet.init('API_KEY', 'API_SECRET');

You can then make requests like this :

    mj.request('listsAll', 'GET', {
        success: function(data) {
            //Do something with the returned data here
            console.log(data)
        },
        error: function(error, data) {
            //handle error case here.
            //The body of the response is passed to the callback as well
            console.log(error, data)
        }
    });

    mj.request('messageCampaigns', 'GET', {
        //pass your request parameters in this object
        id: '207413',
        success: function(data) {
            console.log(data)
        },
        error: function(error, data) {
            console.log(error, data)
        }
    });


License
-------

node-mailjet is licensed under the MIT License. (See [LICENSE](LICENSE.md))
