MangoPaySDK.event = {
    /**
     * Fetches all events
     * @param params
     * @param callback
     */
    list: function (params, callback) {
        MangoPayClient.get('/events', params, callback);
    }
};
