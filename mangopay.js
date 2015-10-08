apiUrl = null;

MangoPaySDK = {
    production: false,

    /**
     * Prepares credentials for authentication
     * @param clientId
     * @param secret
     */
    authenticate: function (clientId, secret) {
        var prodUrl = 'https://api.mangopay.com/v2';
        var testUrl = 'https://api.sandbox.mangopay.com/v2';
        apiUrl = (MangoPaySDK.production ? prodUrl : testUrl) + '/' + clientId;
        MangoPaySDK.credentials = 'Basic ' + new Buffer(clientId + ':' + secret).toString('base64');
    }
};