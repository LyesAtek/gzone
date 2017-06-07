module.exports = function (app) {
    return function (req, res) {
        var user = app.model.user;
        var login = req.body.usernameOrEmailAddress;
        var password = req.body.password;
        var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
        var options = {
            password: password
        };
        login.indexOf('@') === -1 ? options.username = login : options.email = login;

        user.findOne(options, function (err, result) {
            if (err){
                return res.status(500).send({error: err});
            }
            else {

                if (result != null)
                    res.send({
                        id: result._id,
                        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
                    });
                else
                    res.send({error: 'Invalid email or password'});
            }
        });

    }
};