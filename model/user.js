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
                required: true,
                unique: true
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
                type: String
            },
            description: {
                type: String
            },
            facebook: {
                type: String
            },
            twitter: {
                type: String
            },
            steam: {
                type: String
            },
            youtube: {
                type: String
            },
            twitch: {
                type: String
            },
            website: {
                type: String
            },
            certified: {
                type: Boolean,
                default: false
            },
            datetimeRegister: {
                type: Date,
                default: Date.now
            },
            datetimeLastLogin: {
                type: Date
            },
            friends: {
                type: [app.mongoose.Schema.Types.ObjectId],
                default: []

            },
            followers: {
                type: [app.mongoose.Schema.Types.ObjectId],
                default: []

            },
            subscribers: {
                type: [app.mongoose.Schema.Types.ObjectId],
                default: []
            }
        });

    var user = app.mongoose.model('user', userSchema);
    return user;
};