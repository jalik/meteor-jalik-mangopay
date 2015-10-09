MangoPaySDK.wallet = {
    /**
     * Creates a new wallet
     * @param obj
     * @param callback
     */
    create: function (obj, callback) {
        if (!(obj instanceof MangoPaySDK.wallet.Wallet)) {
            throw new Error('obj is not instance of Wallet');
        }
        HttpClient.post('/wallets', obj, callback);
    },

    /**
     * Fetches the wallet by Id
     * @param id
     * @param callback
     */
    fetch: function (id, callback) {
        if (typeof id !== 'number' && typeof id !== 'string') {
            throw new Error('id is not valid');
        }
        HttpClient.get('/wallets/' + id, callback);
    },

    /**
     * Fetches all transactions of the wallet
     * @param id
     * @param callback
     */
    transactions: function (id, callback) {
        if (typeof id !== 'number' && typeof id !== 'string') {
            throw new Error('id is not valid');
        }
        HttpClient.get('/wallets/' + id + '/transactions', callback);
    },

    /**
     * Updates the wallet by Id
     * @param id
     * @param obj
     * @param callback
     */
    update: function (id, obj, callback) {
        if (typeof id !== 'number' && typeof id !== 'string') {
            throw new Error('id is not valid');
        }
        if (typeof obj !== 'object' || obj === null) {
            throw new Error('obj is not valid');
        }
        HttpClient.put('/wallets/' + id, obj, callback);
    },

    /**
     * A wallet
     * @param options
     * @constructor
     */
    Wallet: function (options) {
        this.Currency = null;
        this.Description = null;
        this.Owners = [];
        this.Tag = null;

        _.extend(this, options);
    }
};