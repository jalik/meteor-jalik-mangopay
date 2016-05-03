MangoPaySDK.payin = {

    /**
     * Types of direct debit
     */
    directDebitType: {
        ELV: 'ELV',
        GIROPAY: 'GIROPAY',
        SOFORT: 'SOFORT'
    },

    /**
     * Pay-in status
     */
    status: {
        CREATED: 'CREATED',
        FAILED: 'FAILED',
        SUCCEEDED: 'SUCCEEDED'
    },

    /**
     * Creates a new PAY-IN
     * @param obj
     * @param callback
     */
    create: function (obj, callback) {
        if (obj instanceof MangoPaySDK.payin.BankWire) {
            MangoPayClient.post('/payins/bankwire/direct', obj, callback);
        }
        else if (obj instanceof MangoPaySDK.payin.DirectDebit) {
            MangoPayClient.post('/payins/directdebit/web', obj, callback);
        }
        else if (obj instanceof MangoPaySDK.payin.PreAuthorizedAmount) {
            MangoPayClient.post('/payins/PreAuthorized/direct', obj, callback);
        }
        else if (obj instanceof MangoPaySDK.payin.TokenizedCard) {
            MangoPayClient.post('/payins/card/direct', obj, callback);
        }
        else if (obj instanceof MangoPaySDK.payin.WebForm) {
            MangoPayClient.post('/payins/card/web', obj, callback);
        }
        else {
            throw new Error('obj is not instance of [BankWire, DirectDebit, PreAuthorizedAmount, TokenizedCard, WebForm]');
        }
    },

    /**
     * Fetches the PAY-IN by Id
     * @param payinId
     * @param callback
     */
    fetch: function (payinId, callback) {
        if (typeof payinId !== 'number' && typeof payinId !== 'string') {
            throw new Error('payinId is not valid');
        }
        MangoPayClient.get('/payins/' + payinId, null, callback);
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
     * A Tokenized card PAY-IN
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
    },

    /**
     * A Web form PAY-IN
     * @param options
     * @constructor
     */
    WebForm: function (options) {
        this.Tag = null;
        this.AuthorId = null;
        this.DebitedFunds = null;
        this.Fees = null;
        this.CreditedWalletId = null;
        this.ReturnURL = null;
        this.TemplateURLOptions = null;
        this.Culture = null;
        this.CardType = null;
        this.SecureMode = null;
        this.CreditedUserId = null;

        _.extend(this, options);
    }
};
