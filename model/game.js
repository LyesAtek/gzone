'use strict';
module.exports = function (app) {
    var gameSchema = app.mongoose.Schema(
        {
            name: {
                type: String,
                required: true
            },
            followersId: {
                type: [app.mongoose.Schema.Types.ObjectId],
                default: []
            },
            platforms: {
                type: [String],
                default: []
            },
            developer: {
                type: String,
                required: true
            },
            editor: {
                type: String,
                required: true
            },
            categories: {
                type: [String],
                default: []
            },
            synopsis:{
                type: String,
                required: true
            },
            solo:{
                type: Boolean,
                required: true
            },
            multiplayer:{
                type: Boolean,
                required: true
            },
            cooperative:{
                type: Boolean,
                required: true
            },
            website:{
                type: String,
                required: false
            },
            boxart:{
                type: String,
                required: false
            },
            datetimeCreated:{
                type: Date,
                default: Date.now
            }
        });
    var game = app.mongoose.model('game', gameSchema);
    return game;
};