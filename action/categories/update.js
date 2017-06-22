module.exports = function (app) {
    return function (req, res) {
        var category =  app.model.category;
        var categoryId = req.params.categoryId;

        category.update({_id: categoryId}, req.body, function (err, result) {
            if(err){
                return res.status(500).send({error: err});
            }
            else{
                if (result!=null) {
                    res.send({});
                }
                else
                    res.send({error: "Category update failed"});
            }
        });

    }
};