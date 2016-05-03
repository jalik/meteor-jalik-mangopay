MangoPaySDK.refund = {

    /**
     * Creates a new refund
     * @param transferId
     * @param obj
     * @param callback
     */
    create: function (transferId, obj, callback) {
        if (typeof transferId !== 'number' && typeof transferId !== 'string') {
            throw new Error('transferId is not valid');
        }
        if (obj instanceof MangoPaySDK.refund.TransferRefund) {
            MangoPayClient.post('/transfers/' + transferId + '/refunds', obj, callback);
        }
        else if (obj instanceof MangoPaySDK.refund.PayinRefund) {
            MangoPayClient.post('/payins/' + transferId + '/refunds', obj, callback);
        }
        else {
            throw new Error('obj is not instance of TransferRefund');
        }
    },

    /**
     * Fetches the refund by Id
     * @param refundId
     * @param callback
     */
    fetch: function (refundId, callback) {
        if (typeof refundId !== 'number' && typeof refundId !== 'string') {
            throw new Error('refundId is not valid');
        }
        MangoPayClient.get('/refunds/' + refundId, null, callback);
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
