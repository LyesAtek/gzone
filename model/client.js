'use strict';
module.exports = function (app) {
    var clientSchema =  app.mongoose.Schema({
        name: {
            type: String,
            unique: true,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        secret: {
            type: String,
            required: true
        }
    });

    var client = app.mongoose.model('client', clientSchema);
    return client;
};
