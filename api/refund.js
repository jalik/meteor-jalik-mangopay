MangoPaySDK.refund = {
    /**
     * Creates a new refund
     * @param obj
     * @param transferId
     * @param callback
     */
    create: function (obj, transferId, callback) {
        if (typeof transferId !== 'number' && typeof transferId !== 'string') {
            throw new Error('transferId is not valid');
        }
        if (obj instanceof MangoPaySDK.refund.TransferRefund) {
            HttpClient.post('/transfers/' + transferId + '/refunds', obj, callback);
        }
        else if (obj instanceof MangoPaySDK.refund.PayinRefund) {
            HttpClient.post('/payins/' + transferId + '/refunds', obj, callback);
        }
        else {
            throw new Error('obj is not instance of TransferRefund');
        }
    },

    /**
     * Fetches the refund by Id
     * @param id
     * @param callback
     */
    fetch: function (id, callback) {
        if (typeof id !== 'number' && typeof id !== 'string') {
            throw new Error('id is not valid');
        }
        HttpClient.get('/refunds/' + id, callback);
    },

    /**
     * A PAY-IN refund (min 1€, works with DirectPayin, some WebPayins and PreAuthorizationPayin)
     * @param options
     * @constructor
     */
    PayinRefund: function (options) {
        this.AuthorId = null;
        this.DebitedFunds = null;
        this.Fees = null;

        _.extend(this, options);
    },

    /**
     * A wallet transfer refund
     * @param options
     * @constructor
     */
    TransferRefund: function (options) {
        this.AuthorId = null;

        _.extend(this, options);
    }
};