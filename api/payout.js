MangoPaySDK.payout = {

    /**
     * Pay-out status
     */
    status: {
        CREATED: 'CREATED',
        FAILED: 'FAILED',
        SUCCEEDED: 'SUCCEEDED'
    },

    /**
     * Creates a new payout
     * @param obj
     * @param callback
     */
    create: function (obj, callback) {
        if (obj instanceof MangoPaySDK.payout.BankWire) {
            MangoPayClient.post('/payouts/bankwire', obj, callback);
        }
        else {
            throw new Error('obj is not instance of BankWire');
        }
    },

    /**
     * Fetches the payout by Id
     * @param payoutId
     * @param callback
     */
    fetch: function (payoutId, callback) {
        if (typeof payoutId !== 'number' && typeof payoutId !== 'string') {
            throw new Error('payoutId is not valid');
        }
        MangoPayClient.get('/payouts/' + payoutId, null, callback);
    },

    /**
     * A bank wire PAY-OUT
     * @param options
     * @constructor
     */
    BankWire: function (options) {
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
