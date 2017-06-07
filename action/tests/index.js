module.exports = function(app){
    return {
        get: require('./get')(app),
        userList: require('./userList')(app),
        gameList: require('./gameList')(app),
        create: require('./create')(app),
        delete: require('./delete')(app)
    };
};