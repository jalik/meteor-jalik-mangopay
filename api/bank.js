MangoPaySDK.bank = {

    /**
     * Types of bank account
     */
    type: {
        IBAN: 'IBAN',
        UK: 'UK',
        US: 'US',
        CA: 'CA',
        OTHER: 'Other'
    },

    /**
     * Creates a new bank account
     * @param userId
     * @param type
     * @param obj
     * @param callback
     */
    create: function (userId, type, obj, callback) {
        if (typeof userId !== 'number' && typeof userId !== 'string') {
            throw new Error('userId is not valid');
        }
        if (!MangoPaySDK.bank.type.hasOwnProperty(type)) {
            throw new Error('type is not valid');
        }
        if (obj instanceof MangoPaySDK.bank.BankAccount) {
            MangoPayClient.post('/users/' + userId + '/bankaccounts/' + type, obj, callback);
        }
        else {
            throw new Error('obj is not instance of BankAccount');
        }
    },

    /**
     * Fetches the bank account by Id
     * @param userId
     * @param bankAccountId
     * @param callback
     */
    fetch: function (userId, bankAccountId, callback) {
        if (typeof userId !== 'number' && typeof userId !== 'string') {
            throw new Error('userId is not valid');
        }
        if (typeof bankAccountId !== 'number' && typeof bankAccountId !== 'string') {
            throw new Error('bankAccountId is not valid');
        }
        MangoPayClient.get('/users/' + userId + '/bankaccounts/' + bankAccountId, null, callback);
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
