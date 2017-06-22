'use strict';
module.exports = function (app) {
    var categorySchema = app.mongoose.Schema(
        {
            title:{
                type: String,
                required: true,
                unique: true
            },
            image:{
                type: String,
                required: false
            }
        });
    var category = app.mongoose.model('category', categorySchema);
    return category;
};