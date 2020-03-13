const Category = require('../models/category.model');

//Simple version, without validation or sanitation
module.exports =  {
    getAll(req, res) {
        Category.find({}, function (err, docs) {
            if (err) return next(err);
            res.send(docs);
        })
    },
    getById(req, res) {
        Category.findById(req.params.id, function (err, product) {
            if (err) return next(err);
            res.send(product);
        })
    },
    create(req, res, next) {
        console.log(req.body.name)
        const category = new Category({
            _id: req.body._id,
            name: req.body.name
        });

        category.save((err) => {
            console.log
            if (err) {
                res.send('ERRORRR')
                return next(err);
            }
            res.send('Product Created successfully')
        })
        console.log(Category)
        //res.send('Greetings from the Test controller!');
    },
    update(req, res) {
        console.log(Category)
        res.send('Greetings from the Test controller!');
    },
    delete(req, res) {
        console.log(Category)
        res.send('Greetings from the Test controller!');
    }
}