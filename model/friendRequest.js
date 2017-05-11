'use strict';
module.exports = function (app) {
    var friendRequestSchema = app.mongoose.Schema(
        {
            senderId: {
                type: app.mongoose.Schema.Types.ObjectId,
                required : true
            },
            receiverId: {
                type: app.mongoose.Schema.Types.ObjectId,
                required : true
            },
            message: {
                type: String,
                default: "Hi ! I would like to be your friend."
            },
            created: {
                type: Date,
                default: Date.now
            },
            state: {
                type: String,
                default: "Pending"
            }
        });

    var friendRequest = app.mongoose.model('friendRequest', friendRequestSchema);
    return friendRequest;
};