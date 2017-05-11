var q = require('q');
module.exports = function (app) {
    return function (req, res) {
        var user = app.model.user;
        var friendRequest = app.model.friendRequest;
        var senderId = app.mongoose.Types.ObjectId(req.body.senderId);
        var receiverId = app.mongoose.Types.ObjectId(req.body.receiverId);
        var sender = {};
        var receiver = {};

        if (!senderId || !receiverId) {
            res.status(400).send({error: "Bad request"});
        }

        friendRequest.findOne({senderId: senderId, receiverId: receiverId}, function (err, result) {
            console.log(JSON.stringify(result));
            if (err) {
                console.error(err);
                res.status(500).send({error: "Server error, please try again later"});
            }
            else if(!result || !result.state){
                res.status(404).send({error: "Friend request not found"});
            }
            else if(result.state == "Accepted"){
                res.status(403).send({error: "Sender is already friends with receiver"});
            }
            else if(result.state == "Denied"){
                res.status(403).send({error: "Sender has been blocked by receiver"});
            }
            else {
                updateFriendRequestState(senderId, receiverId)
                    .then(function () {
                        return setUsersAsFriends(senderId, receiverId);
                    })
                    .then(function () {
                        res.send({});
                    })
                    .catch(function (error) {
                        res.status(500).send({error: JSON.stringify(error)});
                    });
            }
        });

        //////////////////////////////////

        function updateFriendRequestState(senderId, receiverId) {
            var deferred = q.defer();
            friendRequest.update({
                senderId: senderId,
                receiverId: receiverId
            }, {$set: {state: "Accepted"}}, function (err, result) {
                if (err) {
                    deferred.reject(err);
                }
                else {
                    if (result) {
                        deferred.resolve();
                    }
                    else {
                        deferred.reject();
                    }

                }
            });
            return deferred.promise;
        }

        function setUsersAsFriends(senderId, receiverId) {
            var deferred = q.defer();
            user.update({_id: senderId}, {$push: {friends : receiverId}}, function(senderUpdateErr) {
                if (senderUpdateErr) {
                    deferred.reject(senderUpdateErr);
                }
                else {
                    user.update({_id: receiverId}, {$push: {friends: senderId}}, function (receiverUpdateErr) {
                        if (senderUpdateErr) {
                            deferred.reject(receiverUpdateErr);
                        }
                        else {
                            deferred.resolve();
                        }
                    })
                }
            });
            return deferred.promise;
        }
    };
};