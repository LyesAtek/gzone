module.exports = function (app) {
    return function (req, res) {
        var category =  app.model.category;
        var categoryId = req.params.categoryId;
        category.findOne({
            _id: categoryId
        },function (err,result) {
            if(err){
                return res.status(500).send({error: err});
            }
            else{
                if (result) {
                    res.send(result)
                }
                else
                    res.status(404).send({error: 'Resource not found'});
            }
        });

    }
};