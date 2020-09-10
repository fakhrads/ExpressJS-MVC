const db = require("../models");
const Jobs = db.jobs;
const Op = db.Sequelize.Op;

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.category || !req.body.title || !req.body.description || !req.body.category || !req.body.position || !req.body.time || !req.body.company || !req.body.job_type || !req.body.status) {
    req.flash('error', "Form tidak boleh ada yang kosong.")
    res.redirect('/create')
    return;
  }

  // Create a Post
  const data = {
    jid: makeid(8),
    category: req.body.category,
    title: req.body.title,
    description: req.body.description,
    position: req.body.position,
    time: req.body.time,
    company: req.body.company,
    job_type: req.body.job_type,
    status: req.body.status,
  };

  // Save Post in the database
  Jobs.create(data)
    .then(data => {
        req.flash('success','Jobs kamu telah berhasil di simpan ke dalam database.');
        res.redirect('/create')
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Terdapat beberapa error ketika sedang menyimpan ke database."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAll = (req, res) => {
  Books.findAll()
    .then(data => {
        res.render('jobs',{
            data:data,
            message:""
        });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};