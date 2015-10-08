MangoPaySDK.payin = {
    /**
     * Creates a new payin
     * @param obj
     * @param callback
     */
    create: function (obj, callback) {
        if (obj instanceof MangoPaySDK.payin.BankWire) {
            MangoPayClient.post('/payins/bankwire/direct', obj, callback);
        }
        else if (obj instanceof MangoPaySDK.user.DirectDebit) {
            MangoPayClient.post('/payins/directdebit/web', obj, callback);
        }
        else if (obj instanceof MangoPaySDK.user.PreAuthorizedAmount) {
            MangoPayClient.post('/payins/PreAuthorized/direct', obj, callback);
        }
        else if (obj instanceof MangoPaySDK.user.TokenizedCard) {
            MangoPayClient.post('/payins/card/direct', obj, callback);
        }
        else {
            throw new Error('obj is not instance of LegalUser or NaturalUser');
        }
    },

    /**
     * Fetches the payin by Id
     * @param id
     * @param callback
     */
    fetch: function (id, callback) {
        if (typeof id !== 'number' && typeof id !== 'string') {
            throw new Error('id is not valid');
        }
        MangoPayClient.get('/payins/' + id, callback);
    },

    /**
     * Fetches all payins
     * @param callback
     */
    list: function (callback) {
        MangoPayClient.get('/payins', callback);
    },

    /**
     * A Bank Wire PAY-IN
     * @param options
     * @constructor
     */
    BankWire: function (options) {
        this.AuthorId = null;
        this.CreditedUserId = null;
        this.CreditedWalletId = null;
        this.DeclaredDebitedFunds = null;
        this.DeclaredFees = null;
        this.Tag = null;

        _.extend(this, options);
    },

    /**
     * A direct debit PAY-IN
     * @param options
     * @constructor
     */
    DirectDebit: function (options) {
        this.AuthorId = null;
        this.CreditedUserId = null;
        this.CreditedWalletId = null;
        this.DebitedFunds = null;
        this.Fees = null;
        this.ReturnURL = null;
        this.TemplateURLOptions = null;
        this.Culture = null;
        this.DirectDebitType = null;
        this.Tag = null;

        _.extend(this, options);
    },

    /**
     * A Pre-Authorized amount PAY-IN
     * @param options
     * @constructor
     */
    PreAuthorizedAmount: function (options) {
        this.AuthorId = null;
        this.CreditedUserId = null;
        this.CreditedWalletId = null;
        this.DebitedFunds = null;
        this.Fees = null;
        this.PreauthorizationId = null;
        this.Tag = null;

        _.extend(this, options);
    },

    /**
     * A tokenized card PAY-IN
     * @param options
     * @constructor
     */
    TokenizedCard: function (options) {
        this.AuthorId = null;
        this.CardId = null;
        this.CreditedUserId = null;
        this.CreditedWalletId = null;
        this.DebitedFunds = null;
        this.Fees = null;
        this.SecureModeReturnURL = null;
        this.SecureMode = null;
        this.Tag = null;

        _.extend(this, options);
    }
};