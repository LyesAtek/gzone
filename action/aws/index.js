module.exports = function(app){
    return {
        upload: require('./upload')(app)
    };
};