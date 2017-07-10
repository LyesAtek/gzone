'use strict';
module.exports = function (app) {
    var commentSchema = app.mongoose.Schema(
        {
            userId: {
                type: app.mongoose.Schema.Types.ObjectId,
                required: true
            },
            text: {
                type: String,
                required: true
            },
            video: {
                type: String
            },
            datetimeCreated: {
                type: Date,
                default: Date.now
            }
        });
    var comment = app.mongoose.model('comment', commentSchema);
    return comment;
};