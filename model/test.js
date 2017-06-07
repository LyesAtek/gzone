'use strict';
var uniqueValidator = require('mongoose-unique-validator');
module.exports = function (app) {
    var testSchema = app.mongoose.Schema(
        {
            userId: {
                type: app.mongoose.Schema.Types.ObjectId,
                required: true
            },
            gameId: {
                type: app.mongoose.Schema.Types.ObjectId,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            },
            mark: {
                type: Number
            },
            datetimeTested: {
                type: Date
            },
            datetimeCreated: {
                type: Date,
                default: Date.now
            }
        });
    testSchema.index({userId:1, gameId:1}, {unique: true});
    testSchema.plugin(uniqueValidator);
    var test = app.mongoose.model('test', testSchema);
    return test;
};