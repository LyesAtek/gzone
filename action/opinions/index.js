module.exports = function(app){
    return {
        get: require('./get')(app),
        userList: require('./userList')(app),
        testList: require('./testList')(app),
        create: require('./create')(app),
        delete: require('./delete')(app)
    };
};