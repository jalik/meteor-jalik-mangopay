MangoPaySDK.event = {
    /**
     * Fetches all events
     * @param callback
     */
    list: function (callback) {
        HttpClient.get('/events', callback);
    }
};