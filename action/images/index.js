module.exports = function(app){
    return {
        get: require('./get')(app),
        gameList: require('./gameList')(app),
        userList: require('./userList')(app),
        create: require('./create')(app),
        delete: require('./delete')(app)
    };
};