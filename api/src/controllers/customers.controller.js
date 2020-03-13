const Customer = require('../models/customers.model');

//Simple version, without validation or sanitation
module.exports =  {
    getAll(req, res) {
        Customer.find({}, function (err, docs) {
            if (err) return next(err);
            res.send(docs);
        })
    },
    getById(req, res) {
        Customer.findById(req.params.id, function (err, product) {
            if (err) return next(err);
            res.send(product);
        })
    },
    create(req, res, next) {
        console.log(req.body.name)
        const customer = new Customer({
            _id: req.body._id,
            name: req.body.name,
            createdAt: Date.now(),
            createdByUser: req.body.createdByUser
        });

        customer.save((err) => {
            console.log
            if (err) {
                return next(err);
            }
            res.send('Product Created successfully')
        })
        //res.send('Greetings from the Test controller!');
    },
    update(req, res) {
        res.send('Greetings from the Test controller!');
    },
    delete(req, res) {
        res.send('Greetings from the Test controller!');
    }
}