MangoPaySDK.preAuthorization = {

    /**
     * The payment status
     */
    paymentStatus: {
        CANCELED: 'CANCELED',
        WAITING: 'WAITING'
    },

    /**
     * Creates a new pre-authorization
     * @param obj
     * @param callback
     */
    create: function (obj, callback) {
        if (!(obj instanceof MangoPaySDK.preAuthorization.PreAuthorization)) {
            throw new Error('obj is not instance of PreAuthorization');
        }
        HttpClient.post('/preauthorizations/card/direct', obj, callback);
    },

    /**
     * Fetches the pre-authorization by Id
     * @param preAuthId
     * @param callback
     */
    fetch: function (preAuthId, callback) {
        if (typeof preAuthId !== 'number' && typeof preAuthId !== 'string') {
            throw new Error('preAuthId is not valid');
        }
        HttpClient.get('/preauthorizations/' + preAuthId, callback);
    },

    /**
     * Updates the pre-authorization by Id
     * @param preAuthId
     * @param obj
     * @param callback
     */
    update: function (preAuthId, obj, callback) {
        if (typeof preAuthId !== 'number' && typeof preAuthId !== 'string') {
            throw new Error('preAuthId is not valid');
        }
        if (typeof obj !== 'object' || obj === null) {
            throw new Error('obj is not valid');
        }
        HttpClient.put('/preauthorizations/' + preAuthId, obj, callback);
    },

    /**
     * A pre-authorization amount
     * @param options
     * @constructor
     */
    PreAuthorization: function (options) {
        this.Tag = null;
        this.AuthorId = null;
        this.DebitedFunds = null;
        this.SecureMode = null;
        this.CardId = null;
        this.SecureModeReturnURL = null;

        _.extend(this, options);
    }
};