module.exports = function(app){
    return {
        get: require('./get')(app),
        getByToken: require('./getByToken')(app),
        list: require('./list')(app),
        locationList: require('./locationList')(app),
        followedUsersList: require('./followedUsersList')(app),
        followedGamesList: require('./followedGamesList')(app),
        followUser: require('./followUser')(app),
        unfollowUser: require('./unfollowUser')(app),
        followGame: require('./followGame')(app),
        unfollowGame: require('./unfollowGame')(app),
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