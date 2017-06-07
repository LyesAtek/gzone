module.exports = function(app){
    return {
        get: require('./get')(app),
        list: require('./list')(app),
        create: require('./create')(app),
        delete: require('./delete')(app)
    };
};