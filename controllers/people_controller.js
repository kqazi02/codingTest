var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.Person.findAll({
    include: [ models.Task ]
  }).then(function(people) {
    res.render('people/index', {
      user_id: req.session.user_id,
      email: req.session.user_email,
      logged_in: req.session.logged_in,
      people: people
    });
  });
});

router.post('/create', function(req, res) {
  models.Person.create({
    name: req.body.name
  }).then(function() {
    res.redirect('/');
  });
});

router.delete("/:id", function(req, res){


		db.userProfile.destroy({
				where:{userId: req.session.user.userId},
				
		}).then(function(user) {
				req.session.reset();
				// console.log("ALREADY DELETED");
				
				// redirect the user to the homepage
				res.redirect("/");
			// error handling
			}).catch(function(error){
					console.log(error);
					res.redirect("/errorPage")
				});
	},

module.exports = router;
