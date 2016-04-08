MangoPaySDK = {

    /**
     * The API URL
     * @type {string}
     */
    apiUrl: '',

    /**
     * The API version to use
     */
    apiVersion: 'v2',

    /**
     * Error codes
     */
    errors: {
        '001999': 'Generic Operation error',
        '001001': 'Unsufficient wallet balance',
        '001002': 'Author is not the wallet owner',
        '001011': 'Transaction amount is higher than maximum permitted amount',
        '001012': 'Transaction amount is lower than minimum permitted amount',
        '001401': 'Transaction has already been successfully refunded',
        '005403': 'The refund cannot exceed initial transaction amount',
        '005404': 'The refunded fees cannot exceed initial fee amount',
        '005405': 'Balance of client fee wallet insufficient',
        '005407': 'Duplicated operation: you cannot refund the same amount more than once for a transaction during the same day. ',
        '105101': 'Invalid card number',
        '105102': 'Invalid cardholder name',
        '105103': 'Invalid PIN code',
        '105104': 'Invalid PIN format',
        '105299': 'Token input Error',
        '105202': 'Card number: invalid format',
        '105203': 'Expiry date: missing or invalid format',
        '105204': 'CVV: missing or invalid format',
        '105205': 'Callback URL: Invalid format',
        '105206': 'Registration data : Invalid format',
        '101001': 'The user does not complete transaction',
        '101002': 'The transaction has been cancelled by the user',
        '101101': 'Transaction refused by the bank (Do not honor)',
        '101102': 'Transaction refused by the bank (Amount limit)',
        '101103': 'Transaction refused by the terminal',
        '101104': 'Transaction refused by the bank (card limit reached)',
        '101106': 'The card is inactive',
        '101410': 'The card is not active',
        '101111': 'Maximum number of attempts reached',
        '101112': 'Maximum amount exceeded',
        '101115': 'Debit limit exceeded',
        '101119': 'Debit limit exceeded',
        '101399': 'Secure mode: 3DSecure authentication is not available',
        '001599': 'Token processing error',
        '002999': 'Blocked due to the KYC limitation',
        '008999': 'Fraud policy error',
        '008001': 'Counterfeit Card',
        '008002': 'Lost Card',
        '008004': 'Card bin not authorized',
        '008005': 'Security violation',
        '008006': 'Fraud suspected by the bank',
        '008007': 'Opposition on bank account (Temporary)',
        '008500': 'Transaction blocked by Fraud Policy',
        '008600': 'Wallet blocked by Fraud policy',
        '008700': 'User blocked by Fraud policy',
        '009199': 'PSP technical error',
        '009499': 'Bank technical error',
        '009999': 'Technical error',
        '09101': 'Username/Password is incorrect',
        '09102': 'Account is locked or inactive',
        '09104': 'Client certificate is disabled',
        '09201': 'You do not have permissions to make this API call',
        '02625': 'Invalid card number',
        '02626': 'Invalid date. Use mmdd format',
        '02627': 'Invalid CCV number'
    },

    /**
     * The API mode to use (sandbox or live)
     * @type {boolean}
     */
    production: false,

    /**
     * Prepares credentials for authentication
     * @param clientId
     * @param secret
     */
    authenticate: function (clientId, secret) {
        var liveUrl = 'https://api.mangopay.com/' + this.apiVersion;
        var sandUrl = 'https://api.sandbox.mangopay.com/' + this.apiVersion;

        if (typeof window !== 'undefined' || typeof navigator !== 'undefined') {
            console.warn("WARNING : You are authenticating to the MangoPay API on the client, all calls to the API should be done on the server for security reasons.");
        }

        // Set the API endpoint
        this.apiUrl = (this.isLive() ? liveUrl : sandUrl) + '/' + clientId;

        // Set credentials used for authentication
        this.credentials = clientId + ':' + secret;
    },

    /**
     * Returns the API URL
     * @return {string}
     */
    getApiUrl: function () {
        return this.apiUrl;
    },

    /**
     * Returns the version of the API
     * @return {string}
     */
    getApiVersion: function () {
        return this.apiVersion;
    },

    /**
     * Returns the error message
     * @param code
     * @return {string}
     */
    getErrorMessage: function (code) {
        return typeof this.errors[code] === 'string' ? this.errors[code] : 'Unknown error';
    },

    /**
     * Checks if the SDK is pointing to the live API (production)
     * @return {boolean}
     */
    isLive: function () {
        return this.production === true;
    }
};
