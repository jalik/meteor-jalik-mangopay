MangoPaySDK.card = {

    /**
     * Types of card
     */
    type: {
        diners: 'DINERS',
        maestro: 'MAESTRO',
        visaMastercard: 'CB_VISA_MASTERCARD'
    },

    /**
     * Creates a new card
     * @param obj
     * @param callback
     */
    create: function (obj, callback) {
        if (!(obj instanceof MangoPaySDK.card.Card)) {
            throw new Error('obj is not instance of Card');
        }

        // Cast Card to CardRegistration
        var cr = new MangoPaySDK.card.CardRegistration(obj);

        // Create the card registration
        MangoPaySDK.card.createRegistration(cr, function (err, result) {
            if (err) {
                handleAPIResponse(err, result);
            } else {
                console.log('CR', result);

                console.log({
                    data: result.PreregistrationData,
                    accessKeyRef: result.AccessKey,
                    cardNumber: obj.CardNumber,
                    cardExpirationDate: obj.CardExpirationDate,
                    cardCvx: obj.CardCvx
                });

                // Send card details
                HTTP.post(result.CardRegistrationURL, {
                    data: {
                        data: result.PreregistrationData,
                        accessKeyRef: result.AccessKey,
                        cardNumber: obj.CardNumber,
                        cardExpirationDate: obj.CardExpirationDate,
                        cardCvx: obj.CardCvx
                    }
                }, function (err, result2) {
                    if (err) {
                        handleAPIResponse(err, result2);
                    } else {
                        console.log('RD', result2);

                        var data2 = result2.data;

                        // Save registration data
                        MangoPaySDK.card.update(result.Id, {
                            RegistrationData: data2
                        }, callback);
                    }
                });
            }
        });
    },

    /**
     * Creates a new card registration
     * @param obj
     * @param callback
     */
    createRegistration: function (obj, callback) {
        if (!(obj instanceof MangoPaySDK.card.CardRegistration)) {
            throw new Error('obj is not instance of CardRegistration');
        }
        HttpClient.post('/cardregistrations', obj, callback);
    },

    /**
     * Updates the card by Id
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
        HttpClient.post('/cardregistrations/' + id, obj, callback);
    },

    /**
     * A payment card
     * @param options
     * @constructor
     */
    Card: function (options) {
        this.CardCvx = null;
        this.CardExpirationDate = null;
        this.CardNumber = null;
        this.CardType = null;
        this.Currency = null;
        this.UserId = null;

        _.extend(this, options);
    },

    /**
     * A payment card
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