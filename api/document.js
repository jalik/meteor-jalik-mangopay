MangoPaySDK.document = {

    /**
     * Types of document
     */
    type: {
        ADDRESS_PROOF: 'ADDRESS_PROOF',
        ARTICLES_OF_ASSOCIATION: 'ARTICLES_OF_ASSOCIATION',
        IDENTITY_PROOF: 'IDENTITY_PROOF',
        REGISTRATION_PROOF: 'REGISTRATION_PROOF',
        SHAREHOLDER_DECLARATION: 'SHAREHOLDER_DECLARATION'
    },

    /**
     * Creates a new KYC document
     * @param userId
     * @param obj
     * @param callback
     */
    create: function (userId, obj, callback) {
        if (typeof userId !== 'number' && typeof userId !== 'string') {
            throw new Error('userId is not valid');
        }
        if (obj instanceof MangoPaySDK.document.Document) {
            HttpClient.post('/users/' + userId + '/KYC/documents', obj, callback);
        }
        else {
            throw new Error('obj is not instance of Document');
        }
    },

    /**
     * Fetches the KYC document by Id
     * @param userId
     * @param documentId
     * @param callback
     */
    fetch: function (userId, documentId, callback) {
        if (typeof userId !== 'number' && typeof userId !== 'string') {
            throw new Error('userId is not valid');
        }
        if (typeof documentId !== 'number' && typeof documentId !== 'string') {
            throw new Error('documentId is not valid');
        }
        HttpClient.get('/users/' + userId + '/KYC/documents/' + documentId, callback);
    },

    /**
     * Updates the KYC document by Id
     * @param userId
     * @param documentId
     * @param obj
     * @param callback
     */
    update: function (userId, documentId, obj, callback) {
        if (typeof userId !== 'number' && typeof userId !== 'string') {
            throw new Error('userId is not valid');
        }
        if (typeof documentId !== 'number' && typeof userId !== 'string') {
            throw new Error('documentId is not valid');
        }
        if (typeof obj !== 'object' || obj === null) {
            throw new Error('obj is not valid');
        }
        HttpClient.put('/users/' + userId + '/KYC/documents/' + documentId, obj, callback);
    },

    /**
     * Uploads a KYC document
     * @param userId
     * @param documentId
     * @param data
     * @param callback
     */
    upload: function (userId, documentId, data, callback) {
        if (typeof userId !== 'number' && typeof userId !== 'string') {
            throw new Error('userId is not valid');
        }
        if (typeof documentId !== 'number' && typeof userId !== 'string') {
            throw new Error('documentId is not valid');
        }
        if (typeof data === null) {
            throw new Error('data is not valid');
        }
        HttpClient.post('/users/' + userId + '/KYC/documents/' + documentId + '/pages', {File: data}, callback);
    },

    /**
     * A KYC document
     * @param options
     * @constructor
     */
    Document: function (options) {
        this.Tag = null;
        this.Type = null;

        _.extend(this, options);
    }
};