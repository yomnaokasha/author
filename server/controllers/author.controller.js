const Author = require("../model/author.model");

module.exports.findAllAuthors = (req, res) => {
  Author.find()
    .then((allDaAuthors) => {
      res.json({ Authors: allDaAuthors });
    })
    .catch((err) => {
      res.status(500).json({ message: "Something went wrong", error: err });
    });
};

module.exports.findOneSingleAuthor = (req, res) => {
  Author.findOne({ _id: req.params.id })
    .then((oneSingleAuthor) => {
      res.json({ Author: oneSingleAuthor });
    })
    .catch((err) => {
      res.status(500).json({ message: "Something went wrong", error: err });
    });
};

module.exports.createNewAuthor = (req, res) => {
  Author.create(req.body)
    .then((newlyCreatedAuthor) => {
      res.json({ Author: newlyCreatedAuthor });
    })
    .catch((err) => {
      res.status(400).json({ message: "Something went wrong", error: err });
    });
};

module.exports.updateExistingAuthor = (req, res) => {
  Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedAuthor) => {
      res.json({ Author: updatedAuthor });
    })
    .catch((err) => {
      res.status(400).json({ message: "Something went wrong", error: err });
    });
};

module.exports.deleteAnExistingAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json({ result: result });
    })
    .catch((err) => {
      res.status(500).json({ message: "Something went wrong", error: err });
    });
};
