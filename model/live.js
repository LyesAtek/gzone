'use strict';
module.exports = function (app) {
    var liveSchema = app.mongoose.Schema(
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
            description: {
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
            private: {
                type: Boolean,
                default: false
            },
            regular: {
                type: Boolean,
                default: false
            },
            datetimeStart: {
                type: Date
            },
            datetimeEnd: {
                type: Date
            },
            datetimeCreated: {
                type: Date,
                default: Date.now
            }
        });
    var live = app.mongoose.model('live', liveSchema);
    return live;
};