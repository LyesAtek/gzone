module.exports = function(app){
    return {
        get: require('./get')(app),
        delete: require('./delete')(app)
    };
};