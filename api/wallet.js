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
        MangoPayClient.post('/wallets', obj, callback);
    },

    /**
     * Fetches the wallet by Id
     * @param walletId
     * @param callback
     */
    fetch: function (walletId, callback) {
        if (typeof walletId !== 'number' && typeof walletId !== 'string') {
            throw new Error('walletId is not valid');
        }
        MangoPayClient.get('/wallets/' + walletId, null, callback);
    },

    /**
     * Fetches all transactions of the wallet
     * @param walletId
     * @param params
     * @param callback
     */
    transactions: function (walletId, params, callback) {
        if (typeof walletId !== 'number' && typeof walletId !== 'string') {
            throw new Error('walletId is not valid');
        }
        MangoPayClient.get('/wallets/' + walletId + '/transactions', params, callback);
    },

    /**
     * Updates the wallet by Id
     * @param walletId
     * @param obj
     * @param callback
     */
    update: function (walletId, obj, callback) {
        if (typeof walletId !== 'number' && typeof walletId !== 'string') {
            throw new Error('walletId is not valid');
        }
        if (typeof obj !== 'object' || obj === null) {
            throw new Error('obj is not valid');
        }
        MangoPayClient.put('/wallets/' + walletId, obj, callback);
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
