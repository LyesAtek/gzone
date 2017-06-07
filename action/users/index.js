module.exports = function(app){
    return {
        get: require('./get')(app),
        list: require('./list')(app),
        create: require('./create')(app),
        login: require('./login')(app),
        update:require('./update')(app),
        delete: require('./delete')(app),
        getFriends: require('././get')(app),
        createFriend: require('././create')(app),
        deleteFriend: require('././delete')(app),
        createFriendRequest: require('././create')(app),
        deleteFriendRequest: require('././delete')(app)
    };
};