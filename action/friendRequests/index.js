module.exports = function(app){
    return {
        create: require('./create')(app),
        delete: require('./delete')(app),
        accept: require('./accept')(app)
    };
};