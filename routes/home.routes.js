// import express and router
const express = require("express");
const router = express.Router();

//import other files.
const path = require("path");

//home routes
router.get("/", (req, res, next) => {
	res.render("index.ejs", {
		title: "Home",
		server_url: req.server_url,
	});
});

// about routes
router.get(
	"/about",
	(req, res, next) => {
		res.render("about.ejs", {
			title: "About us",
			server_url: req.server_url,
		});
	},
);

// contact routes
router.get(
	"/contact",
	(req, res, next) => {
		res.render("contact.ejs", {
			title: "contact us",
			server_url: req.server_url,
		});
	},
);

// Upload route
router.get(
	"/uploads",
	(req, res, next) => {
		console.log(req.body)
		res.render("uploads.ejs", {
			title: "Uploads",
			server_url: req.server_url,
		});
	},
);

// we will create a post route for complain
router.post(
	"/complain",
	(req, res, next) => {
		res.send(req.body);
	},
);

router.post(
	"/uploadone",
	(req, res, next) => {
		console.log(req.body)
		res.send(req.body);
	},
);

module.exports = router;
