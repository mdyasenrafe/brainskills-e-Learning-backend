const answerModel = require("../Models/AnswarModel");

exports.addAnswer = async (req, res) => {
    // create
    answerModel.create(req.body, (err, data) => {
        if (err) {
            res.status(400).json({
                error: true,
                message: err,
            });
        } else {
            res.status(200).json({
                error: false,
                message: data,
            });
            ``;
        }
    });
};


exports.getAnswer = async (req, res) => {
    answerModel.find({}, (err, data) => {
        if (err) {
            res.status(400).json({
                error: true,
                message: err,
            });
        } else {
            res.status(200).json({
                error: false,
                data: data,
                message: "data fetch successfully",
            });
        }
    });
};
