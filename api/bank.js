MangoPaySDK.bank = {

    /**
     * Types of bank account
     */
    type: {
        IBAN: 'IBAN',
        UK: 'UK',
        US: 'US',
        CA: 'CA',
        Other: 'Other'
    },

    /**
     * Creates a new bank account
     * @param obj
     * @param userId
     * @param type
     * @param callback
     */
    create: function (obj, userId, type, callback) {
        if (typeof userId !== 'number' && typeof userId !== 'string') {
            throw new Error('userId is not valid');
        }
        if (!MangoPaySDK.bank.type.hasOwnProperty(type)) {
            throw new Error('type is not valid');
        }
        if (obj instanceof MangoPaySDK.bank.BankAccount) {
            HttpClient.post('/users/' + userId + '/bankaccounts/' + type, obj, callback);
        }
        else {
            throw new Error('obj is not instance of BankAccount');
        }
    },

    /**
     * Fetches the bank account by Id
     * @param userId
     * @param id
     * @param callback
     */
    fetch: function (userId, id, callback) {
        if (typeof userId !== 'number' && typeof userId !== 'string') {
            throw new Error('userId is not valid');
        }
        if (typeof id !== 'number' && typeof id !== 'string') {
            throw new Error('id is not valid');
        }
        HttpClient.get('/users/' + userId + '/bankaccounts', callback);
    },

    /**
     * Fetches all bank accounts of the user
     * @param userId
     * @param callback
     */
    list: function (userId, callback) {
        if (typeof userId !== 'number' && typeof userId !== 'string') {
            throw new Error('userId is not valid');
        }
        HttpClient.get('/users/' + userId + '/bankaccounts', callback);
    },

    /**
     * A bank account
     * @param options
     * @constructor
     */
    BankAccount: function (options) {
        this.BIC = null;
        this.IBAN = null;
        this.OwnerAddress = null;
        this.OwnerName = null;
        this.UserId = null;
        this.Tag = null;

        _.extend(this, options);
    }
};