MangoPaySDK.user = {

    /**
     * Types of person
     */
    personTypes: {
        BUSINESS: 'BUSINESS',
        ORGANIZATION: 'ORGANIZATION'
    },

    /**
     * Fetches all bank accounts of the user
     * @param userId
     * @param callback
     */
    bankAccounts: function (userId, callback) {
        if (typeof userId !== 'number' && typeof userId !== 'string') {
            throw new Error('userId is not valid');
        }
        MangoPayClient.get('/users/' + userId + '/bankaccounts', callback);
    },

    /**
     * Fetches all cards of the user
     * @param userId
     * @param callback
     */
    cards: function (userId, callback) {
        if (typeof userId !== 'number' && typeof userId !== 'string') {
            throw new Error('userId is not valid');
        }
        MangoPayClient.get('/users/' + userId + '/cards', callback);
    },

    /**
     * Creates a new user
     * @param obj
     * @param callback
     */
    create: function (obj, callback) {
        if (obj instanceof MangoPaySDK.user.LegalUser) {
            MangoPayClient.post('/users/natural', obj, callback);
        }
        else if (obj instanceof MangoPaySDK.user.NaturalUser) {
            MangoPayClient.post('/users/natural', obj, callback);
        }
        else {
            throw new Error('obj is not instance of LegalUser or NaturalUser');
        }
    },

    /**
     * Fetches all documents of the user
     * @param userId
     * @param callback
     */
    documents: function (userId, callback) {
        if (typeof userId !== 'number' && typeof userId !== 'string') {
            throw new Error('userId is not valid');
        }
        MangoPayClient.get('/users/' + userId + '/KYC/documents', callback);
    },

    /**
     * Fetches the user by Id
     * @param userId
     * @param callback
     */
    fetch: function (userId, callback) {
        if (typeof userId !== 'number' && typeof userId !== 'string') {
            throw new Error('userId is not valid');
        }
        MangoPayClient.get('/users/' + userId, callback);
    },

    /**
     * Fetches all users
     * @param callback
     */
    list: function (callback) {
        MangoPayClient.get('/users', callback);
    },

    /**
     * Fetches all transactions of the user
     * @param userId
     * @param callback
     */
    transactions: function (userId, callback) {
        if (typeof userId !== 'number' && typeof userId !== 'string') {
            throw new Error('userId is not valid');
        }
        MangoPayClient.get('/users/' + userId + '/transactions', callback);
    },

    /**
     * Updates the legal user by Id
     * @param userId
     * @param obj
     * @param callback
     */
    updateLegal: function (userId, obj, callback) {
        if (typeof userId !== 'number' && typeof userId !== 'string') {
            throw new Error('userId is not valid');
        }
        if (typeof obj !== 'object' || obj === null) {
            throw new Error('obj is not valid');
        }
        MangoPayClient.put('/users/legal/' + userId, obj, callback);
    },

    /**
     * Updates the natural user by Id
     * @param userId
     * @param obj
     * @param callback
     */
    updateNatural: function (userId, obj, callback) {
        if (typeof userId !== 'number' && typeof userId !== 'string') {
            throw new Error('userId is not valid');
        }
        if (typeof obj !== 'object' || obj === null) {
            throw new Error('obj is not valid');
        }
        MangoPayClient.put('/users/natural/' + userId, obj, callback);
    },

    /**
     * Fetches all wallets of the user
     * @param userId
     * @param callback
     */
    wallets: function (userId, callback) {
        if (typeof userId !== 'number' && typeof userId !== 'string') {
            throw new Error('userId is not valid');
        }
        MangoPayClient.get('/users/' + userId + '/wallets', callback);
    },

    /**
     * A legal user (organisation)
     * @param options
     * @constructor
     */
    LegalUser: function (options) {
        this.Email = null;
        this.HeadquartersAddress = null;
        this.Name = null;
        this.LegalPersonType = null;
        this.LegalRepresentativeAddress = null;
        this.LegalRepresentativeBirthday = null;
        this.LegalRepresentativeCountryOfResidence = null;
        this.LegalRepresentativeEmail = null;
        this.LegalRepresentativeFirstName = null;
        this.LegalRepresentativeLastName = null;
        this.LegalRepresentativeNationality = null;
        this.Tag = null;

        _.extend(this, options);
    },

    /**
     * A Natural user (physical person)
     * @param options
     * @constructor
     */
    NaturalUser: function (options) {
        this.Address = null;
        this.Birthday = null;
        this.CountryOfResidence = null;
        this.Email = null;
        this.FirstName = null;
        this.IncomeRange = null;
        this.LastName = null;
        this.Nationality = null;
        this.Occupation = null;
        this.ProofOfIdentity = null;
        this.ProofOfAddress = null;
        this.Tag = null;

        _.extend(this, options);
    }
};
