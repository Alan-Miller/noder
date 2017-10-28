const data = require('./data');

module.exports = {
    get: (req, res, next) => {
        res.status(200).send(data);
    }
    ,
    post: (req, res, next) => {
        data.push(req.body); 
        res.status(200).send(data);
    }
    ,
    put: (req, res, next) => {
        data[req.params.index].title = req.params.title;
        res.status(200).send(data);
    }
    ,
    delete: (req, res, next) => {
        data.splice(req.params.index, 1);
        res.status(200).send(data);
    }
}