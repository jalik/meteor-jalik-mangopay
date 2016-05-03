MangoPaySDK.cardRegistraton = {

    /**
     * Status of the Card Registration
     */
    status: {
        CREATED: 'CREATED',
        ERROR: 'ERROR',
        VALIDATED: 'VALIDATED'
    },

    /**
     * Creates a new card registration
     * @param obj
     * @param callback
     */
    create: function (obj, callback) {
        if (!(obj instanceof MangoPaySDK.cardRegistraton.CardRegistration)) {
            throw new Error('obj is not instance of CardRegistration');
        }
        MangoPayClient.post('/cardregistrations', obj, callback);
    },

    /**
     * Updates the card registration by Id
     * @param cardRegistrationId
     * @param obj
     * @param callback
     */
    update: function (cardRegistrationId, obj, callback) {
        if (typeof cardRegistrationId !== 'number' && typeof cardRegistrationId !== 'string') {
            throw new Error('cardRegistrationId is not valid');
        }
        if (typeof obj !== 'object' || obj === null) {
            throw new Error('obj is not valid');
        }
        MangoPayClient.put('/cardregistrations/' + cardRegistrationId, obj, callback);
    },

    /**
     * A payment card registration
     * @param options
     * @constructor
     */
    CardRegistration: function (options) {
        this.CardType = null;
        this.Currency = null;
        this.UserId = null;

        _.extend(this, options);
    }
};
