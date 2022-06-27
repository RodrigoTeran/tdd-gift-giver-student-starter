const controller = {};

// Models
const GiftExchange = require("../../models/gift-exchange");

controller.pairs = (req, res) => {

    const { names } = req.body;

    const newNames = GiftExchange.pairs(names);


    res.status(200).send(newNames);
};


controller.traditional = (req, res) => {
    const { names } = req.body;

    const newNames = GiftExchange.traditional(names);

    res.status(200).send(newNames);
};



module.exports = controller;