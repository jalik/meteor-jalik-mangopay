apiUrl = null;

MangoPaySDK = {
    /**
     * The API mode to use (sandbox or live)
     */
    production: false,

    /**
     * Prepares credentials for authentication
     * @param clientId
     * @param secret
     */
    authenticate: function (clientId, secret) {
        var prodUrl = 'https://api.mangopay.com/v2';
        var testUrl = 'https://api.sandbox.mangopay.com/v2';

        // Set the API endpoint
        apiUrl = (MangoPaySDK.production ? prodUrl : testUrl) + '/' + clientId;

        // Set credentials used for authentication
        MangoPaySDK.credentials = clientId + ':' + secret;
    }
};