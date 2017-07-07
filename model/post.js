'use strict';
module.exports = function (app) {
    var postSchema = app.mongoose.Schema(
        {
            userId: {
                type: app.mongoose.Schema.Types.ObjectId,
                required: true
            },
            gameId: {
                type: app.mongoose.Schema.Types.ObjectId
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
                type: [app.mongoose.Schema.Types.ObjectId],
                default: []
            },
            comments: {
                type: [app.mongoose.Schema.Types.ObjectId],
                default: []
            },
            flagOpinion: {
                type: Boolean
            },
            video: {
                type: String
            },
            datetimeCreated: {
                type: Date,
                default: Date.now
            },
            mark:{
                type: Number
            },
            receiverId:{
                type: app.mongoose.Schema.Types.ObjectId
            }

        });
    var post = app.mongoose.model('post', postSchema);
    return post;
};