'use strict';
module.exports = function (app) {
    var userSchema = app.mongoose.Schema(
        {
            reply:{
                type: String,
                required:  true
            },
            dateOfBirth: {
                type: Date,
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
            longitude:{
                type: Number
            },
            latitude:{
                type: Number
            },
            datetimeRegister: {
                type: Date,
                default: Date.now
            },
            followedUsers: {
                type: [app.mongoose.Schema.Types.ObjectId],
                default: []
            },
            followedGames: {
                type: [app.mongoose.Schema.Types.ObjectId],
                default: []
            },
            score:{
                type: Number,
                default: 0
            },
            connected:{
                type: Boolean,
                default: false
            }
        });

    var user = app.mongoose.model('user', userSchema);
    return user;
};