'use strict';
module.exports = function (app) {
    var postSchema = app.mongoose.Schema(
        {
            userId: {
                type: app.mongoose.Schema.Types.ObjectId,
                required: true
            },
            author: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            },
            likes: {
                type: Number,
                default: 0
            },
            pows: {
                type: Number,
                default: 0
            },
            comments: {
                type: [app.mongoose.Schema.Types.ObjectId],
                default: []
            },
            images: {
                type: [app.mongoose.Schema.Types.ObjectId],
                default: []
            },
            videos: {
                type: [app.mongoose.Schema.Types.ObjectId],
                default: []
            },
            datetimeCreated: {
                type: Date,
                default: Date.now
            }
        });
    var post = app.mongoose.model('post', postSchema);
    return post;
};