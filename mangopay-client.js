MangoPayClient = {

    /**
     * Displays debug info in the console
     * @type {boolean}
     */
    debug: false,

    /**
     * Response callback
     * @param err
     * @param result
     * @param callback
     */
    callback: function (err, result, callback) {
        if (typeof callback === 'function') {
            if (err) {
                if (err.response && err.response.data) {
                    var data = err.response.data;
                    var message = '';

                    if (data.errors) {
                        // Extract the first error to return it
                        if (data.errors instanceof Array && data.errors[0]) {
                            message = data.errors[0];
                        }
                        // Merge errors separated by comma
                        else if (typeof data.errors === 'object') {
                            for (var k in data.errors) {
                                if (data.errors.hasOwnProperty(k)) {
                                    message += ', ' + k + ': ' + data.errors[k];
                                }
                            }
                            if (message.length > 1) {
                                message = message.substr(2);
                            }
                        }
                    }
                    callback(new Error(message || data.Message, data.Id));
                }

            } else if (result && result.data) {
                callback(null, result.data, result);

            } else {
                callback(new Error('No data returned'), null, result);
            }
        }
    },

    /**
     * Executes a GET request
     * @param path
     * @param params
     * @param callback
     */
    get: function (path, params, callback) {
        var url = MangoPaySDK.apiUrl + path;
        var options = {auth: MangoPaySDK.credentials, params: params};
        this.debug && console.log('GET ' + url, options);

        HTTP.get(url, options, function (err, result) {
            MangoPayClient.callback(err, result, callback);
        });
    },

    /**
     * Executes a POST request
     * @param path
     * @param obj
     * @param callback
     */
    post: function (path, obj, callback) {
        var url = MangoPaySDK.apiUrl + path;
        var options = {auth: MangoPaySDK.credentials, data: obj};
        this.debug && console.log('POST ' + url, options);

        HTTP.post(url, options, function (err, result) {
            MangoPayClient.callback(err, result, callback);
        });
    },

    /**
     * Executes a PUT request
     * @param path
     * @param obj
     * @param callback
     */
    put: function (path, obj, callback) {
        var url = MangoPaySDK.apiUrl + path;
        var options = {auth: MangoPaySDK.credentials, data: obj};
        this.debug && console.log('PUT ' + url, options);

        HTTP.put(url, options, function (err, result) {
            MangoPayClient.callback(err, result, callback);
        });
    }
};
