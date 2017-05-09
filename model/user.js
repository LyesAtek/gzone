'use strict';
module.exports = function (app) {
    var userSchema = app.mongoose.Schema(
        {
            firstName: {
                type: String,
                required: true
            },
            lastName: {
                type: String,
                required: true
            },
            dateOfBirth: {
                type: Date,
                required: true
            },
            address: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            country: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            username: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            },
            avatar: {
                type: String,
                required: false
            },
            description: {
                type: String,
                required: false
            },
            facebook: {
                type: String,
                required: false
            },
            twitter: {
                type: String,
                required: false
            },
            steam: {
                type: String,
                required: false
            },
            youtube: {
                type: String,
                required: false
            },
            twitch: {
                type: String,
                required: false
            },
            website: {
                type: String,
                required: false
            },
            certified: {
                type: Boolean,
                required: false
            },
            datetimeRegister: {
                type: Date,
                required: false
            },
            datetimeLastLogin: {
                type: Date,
                required: false
            }
        });

    var user = app.mongoose.model('user', userSchema);
    return user;
};