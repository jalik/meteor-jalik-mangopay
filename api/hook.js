MangoPaySDK.hook = {

    /**
     * Types of notification
     */
    eventType: {
        PAYIN_NORMAL_CREATED: 'PAYIN_NORMAL_CREATED',
        PAYIN_NORMAL_SUCCEEDED: 'PAYIN_NORMAL_SUCCEEDED',
        PAYIN_NORMAL_FAILED: 'PAYIN_NORMAL_FAILED',
        PAYOUT_NORMAL_CREATED: 'PAYOUT_NORMAL_CREATED',
        PAYOUT_NORMAL_SUCCEEDED: 'PAYOUT_NORMAL_SUCCEEDED',
        PAYOUT_NORMAL_FAILED: 'PAYOUT_NORMAL_FAILED',
        TRANSFER_NORMAL_CREATED: 'TRANSFER_NORMAL_CREATED',
        TRANSFER_NORMAL_SUCCEEDED: 'TRANSFER_NORMAL_SUCCEEDED',
        TRANSFER_NORMAL_FAILED: 'TRANSFER_NORMAL_FAILED',
        PAYIN_REFUND_CREATED: 'PAYIN_REFUND_CREATED',
        PAYIN_REFUND_SUCCEEDED: 'PAYIN_REFUND_SUCCEEDED',
        PAYIN_REFUND_FAILED: 'PAYIN_REFUND_FAILED',
        PAYOUT_REFUND_CREATED: 'PAYOUT_REFUND_CREATED',
        PAYOUT_REFUND_SUCCEEDED: 'PAYOUT_REFUND_SUCCEEDED',
        PAYOUT_REFUND_FAILED: 'PAYOUT_REFUND_FAILED',
        TRANSFER_REFUND_CREATED: 'TRANSFER_REFUND_CREATED',
        TRANSFER_REFUND_SUCCEEDED: 'TRANSFER_REFUND_SUCCEEDED',
        TRANSFER_REFUND_FAILED: 'TRANSFER_REFUND_FAILED'
    },

    /**
     * Creates a new notification hook
     * @param obj
     * @param callback
     */
    create: function (obj, callback) {
        if (obj instanceof MangoPaySDK.hook.Hook) {
            HttpClient.post('/hooks', obj, callback);
        }
        else {
            throw new Error('obj is not instance of Hook');
        }
    },

    /**
     * Fetches the notification hook by Id
     * @param id
     * @param callback
     */
    fetch: function (id, callback) {
        if (typeof id !== 'number' && typeof id !== 'string') {
            throw new Error('id is not valid');
        }
        HttpClient.get('/hooks/' + id, callback);
    },

    /**
     * Fetches all notification hooks
     * @param callback
     */
    list: function (callback) {
        HttpClient.get('/hooks', callback);
    },

    /**
     * Updates the notification hook by Id
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
        HttpClient.put('/hooks/' + id, obj, callback);
    },

    /**
     * A notification hook
     * @param options
     * @constructor
     */
    Hook: function (options) {
        this.Tag = null;
        this.Url = null;
        this.EventType = null;

        _.extend(this, options);
    }
};