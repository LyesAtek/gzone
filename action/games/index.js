module.exports = function(app){
    return {
        get: require('./get')(app),
        list: require('./list')(app),
        categoryList: require('./categoryList')(app),
        create: require('./create')(app),
        update: require('./update')(app),
        delete: require('./delete')(app)
    };
};