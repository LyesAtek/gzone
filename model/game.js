'use strict';
module.exports = function (app) {
    var gameSchema = app.mongoose.Schema(
        {
            userId: {
                type: app.mongoose.Schema.Types.ObjectId,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            smallName: {
                type: String,
                required: false
            },
            franchise:{
                type: String,
                required: false
            },
            platforms: {
                type: [app.mongoose.Schema.Types.ObjectId],
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
            categoriesId: {
                type: [app.mongoose.Schema.Types.ObjectId],
                default: []
            },
            ratings: {
                type: [Number],
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
            wallpaper:{
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