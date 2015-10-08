MangoPaySDK.user = {
    /**
     * Fetches all cards of the user
     * @param id
     * @param callback
     */
    cards: function (id, callback) {
        if (typeof id !== 'number' && typeof id !== 'string') {
            throw new Error('id is not valid');
        }
        MangoPayClient.get('/users/' + id + '/cards', callback);
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
     * Fetches the user by Id
     * @param id
     * @param callback
     */
    fetch: function (id, callback) {
        if (typeof id !== 'number' && typeof id !== 'string') {
            throw new Error('id is not valid');
        }
        MangoPayClient.get('/users/' + id, callback);
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
     * @param id
     * @param callback
     */
    transactions: function (id, callback) {
        if (typeof id !== 'number' && typeof id !== 'string') {
            throw new Error('id is not valid');
        }
        MangoPayClient.get('/users/' + id + '/transactions', callback);
    },

    /**
     * Updates the user by Id
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
        MangoPayClient.put('/users/natural/' + id, obj, callback);
    },

    /**
     * Fetches all wallets of the user
     * @param id
     * @param callback
     */
    wallets: function (id, callback) {
        if (typeof id !== 'number' && typeof id !== 'string') {
            throw new Error('id is not valid');
        }
        MangoPayClient.get('/users/' + id + '/wallets', callback);
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