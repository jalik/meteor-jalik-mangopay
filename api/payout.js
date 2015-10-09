MangoPaySDK.payout = {
    /**
     * Creates a new payout
     * @param obj
     * @param callback
     */
    create: function (obj, callback) {
        if (obj instanceof MangoPaySDK.payout.Payout) {
            HttpClient.post('/payouts/banwire', obj, callback);
        }
        else {
            throw new Error('obj is not instance of Payout');
        }
    },

    /**
     * Fetches the payout by Id
     * @param id
     * @param callback
     */
    fetch: function (id, callback) {
        if (typeof id !== 'number' && typeof id !== 'string') {
            throw new Error('id is not valid');
        }
        HttpClient.get('/payouts/' + id, callback);
    },

    /**
     * A PAY-OUT
     * @param options
     * @constructor
     */
    Payout: function (options) {
        this.Tag = null;
        this.AuthorId = null;
        this.DebitedWalletId = null;
        this.DebitedFunds = null;
        this.Fees = null;
        this.BankAccountId = null;
        this.BankWireRef = null;

        _.extend(this, options);
    }
};