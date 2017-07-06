'use strict';
module.exports = function (app) {
    var tokenSchema = app.mongoose.Schema({
        value: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true
        },
        clientId: {
            type: String,
            required: true
        },
        expires: {
            type: Date
        }
    });

    var token = app.mongoose.model('tokens', tokenSchema);
    return token;
};