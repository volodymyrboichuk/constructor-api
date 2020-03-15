const User = require('../models/users.model');

//Simple version, without validation or sanitation
module.exports =  {
    getAll(req, res) {
        User.find({}, function (err, docs) {
            if (err) return next(err);
            res.send(docs);
        })
    },
    getById(req, res) {
        User.findById(req.params.id, function (err, product) {
            if (err) return next(err);
            res.send(product);
        })
    },
    create(req, res, next) {
        const user = new User({
            _id: req.body._id,
            login: req.body.login,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            createdAt: Date.now(),
        });

        user.save((err) => {
            console.log
            if (err) {
                return next(err);
            }
            res.send(user)
        })
    },
    update(req, res) {
        res.send('Greetings from the Test controller!');
    },
    delete(req, res) {
        res.send('Greetings from the Test controller!');
    }
}