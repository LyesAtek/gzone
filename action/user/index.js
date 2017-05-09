module.exports = function(app){
    return {
        get: require('./get')(app),
        create: require('./create')(app),
        login: require('./login')(app),
        update:require('./update')(app),
        delete: require('./delete')(app)
    };
};