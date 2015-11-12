MangoPaySDK.event = {
    /**
     * Fetches all events
     * @param callback
     */
    list: function (callback) {
        MangoPayClient.get('/events', callback);
    }
};
