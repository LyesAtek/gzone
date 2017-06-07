var q = require('q');
module.exports = function (app) {
    return function (req, res) {
        var user = app.model.user;
        var friendRequest = app.model.friendRequest;
        var requestId = req.params.requestId;

        friendRequest.findOne({_id: requestId}, function (err, result) {
            if (err) {
                console.error(err);
                res.status(500).send({error: "Server error, please try again later"});
            }
            else if(!result || !result.state){
                res.status(404).send({error: "Friend request not found"});
            }
            else if(result.state == "accepted"){
                res.status(403).send({error: "Friend request already accepted"});
            }
            else if(result.state == "denied"){
                res.status(403).send({error: "Friend request already denied"});
            }
            else {
                updateFriendRequestState(requestId)
                    .then(function () {
                        res.send({});
                    })
                    .catch(function (error) {
                        res.status(500).send({error: JSON.stringify(error)});
                    });
            }
        });

        //////////////////////////////////

        function updateFriendRequestState(requestId) {
            var deferred = q.defer();
            friendRequest.update({
                _id: requestId
            }, {$set: {state: "denied"}}, function (err, result) {
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
    };
};