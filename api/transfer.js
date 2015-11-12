MangoPaySDK.transfer = {
    /**
     * Creates a new transfer
     * @param obj
     * @param callback
     */
    create: function (obj, callback) {
        if (!(obj instanceof MangoPaySDK.transfer.Transfer)) {
            throw new Error('obj is not instance of Transfer');
        }
        MangoPayClient.post('/transfers', obj, callback);
    },

    /**
     * Fetches the transfer by Id
     * @param transferId
     * @param callback
     */
    fetch: function (transferId, callback) {
        if (typeof transferId !== 'number' && typeof transferId !== 'string') {
            throw new Error('transferId is not valid');
        }
        MangoPayClient.get('/transfers/' + transferId, callback);
    },

    /**
     * A e-money transfer (between wallets)
     * @param options
     * @constructor
     */
    Transfer: function (options) {
        this.AuthorId = null;
        this.CreditedUserId = null;
        this.CreditedWalletID = null;
        this.DebitedFunds = null;
        this.DebitedWalletID = null;
        this.Fees = null;
        this.Tag = null;

        _.extend(this, options);
    }
};
