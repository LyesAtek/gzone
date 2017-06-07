'use strict';
module.exports = function (app) {
    var opinionSchema = app.mongoose.Schema(
        {
            userId: {
                type: app.mongoose.Schema.Types.ObjectId,
                required: true
            },
            testId: {
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
                type: Number,
                required: true
            },
            datetimeCreated: {
                type: Date,
                default: Date.now
            }
        });
    var opinion = app.mongoose.model('opinion', opinionSchema);
    return opinion;
};