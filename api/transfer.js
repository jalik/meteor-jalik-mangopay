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
        HttpClient.post('/transfers', obj, callback);
    },

    /**
     * Fetches the transfer by Id
     * @param id
     * @param callback
     */
    fetch: function (id, callback) {
        if (typeof id !== 'number' && typeof id !== 'string') {
            throw new Error('id is not valid');
        }
        HttpClient.get('/transfers/' + id, callback);
    },

    /**
     * A transfer
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