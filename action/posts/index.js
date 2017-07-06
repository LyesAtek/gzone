module.exports = function(app){
    return {
        get: require('./get')(app),
        list: require('./list')(app),
        userList: require('./userList')(app),
        gameList: require('./gameList')(app),
        followedUsersList: require('./followedUsersList')(app),
        likesList: require('./likesList')(app),
        create: require('./create')(app),
        delete: require('./delete')(app)
    };
};