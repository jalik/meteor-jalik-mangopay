MangoPayClient = {
    /**
     * Executes a GET request
     * @param path
     * @param callback
     */
    get: function (path, callback) {
        var url = apiUrl + path;
        var options = _.extend({
            headers: {Authorization: MangoPaySDK.credentials}
        });

        HTTP.get(url, options, function (err, result) {
            handler(err, result, callback);
        });
    },

    /**
     * Executes a POST request
     * @param path
     * @param obj
     * @param callback
     */
    post: function (path, obj, callback) {
        var url = apiUrl + path;
        var options = _.extend({
            headers: {Authorization: MangoPaySDK.credentials},
            data: obj
        });

        HTTP.post(url, options, function (err, result) {
            handler(err, result, callback);
        });
    },

    /**
     * Executes a PUT request
     * @param path
     * @param obj
     * @param callback
     */
    put: function (path, obj, callback) {
        var url = apiUrl + path;
        var options = _.extend({
            headers: {Authorization: MangoPaySDK.credentials},
            data: obj
        });

        HTTP.put(url, options, function (err, result) {
            handler(err, result, callback);
        });
    }
};

var handler = function (err, result, callback) {
    if (typeof callback === 'function') {
        if (result && result.data) {
            callback(err, result.data, result);
        } else {
            callback(new Error('no data'), null, result);
        }
    } else {
        if (err) {
            throw err;
        }
    }
};