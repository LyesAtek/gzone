module.exports = function(app){
    return {
        create: require('./create')(app),
        delete: require('./delete')(app),
        accept: require('./accept')(app),
        deny: require('./deny')(app),
        getSentRequests: require('./sent')(app),
        getReceivedRequests: require('./received')(app)
    };
};