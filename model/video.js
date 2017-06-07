'use strict';
module.exports = function (app) {
    var videoSchema = app.mongoose.Schema(
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
            link: {
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
            private: {
                type: Boolean,
                default: false
            },
            datetimeCreated: {
                type: Date,
                default: Date.now
            }
        });
    var video = app.mongoose.model('video', videoSchema);
    return video;
};