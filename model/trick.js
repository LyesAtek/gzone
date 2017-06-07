'use strict';
module.exports = function (app) {
    var trickSchema = app.mongoose.Schema(
        {
            userId: {
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
            datetimeCreated: {
                type: Date,
                default: Date.now
            }
        });
    var trick = app.mongoose.model('trick', trickSchema);
    return trick;
};