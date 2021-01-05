const router = require("express").Router();

let Article = require("../models/article.model");

router.route("/").get(async (req, res) => {
	try {
		const articles = await Article.find().limit(6); //8
		console.log(articles);
		res.json(articles);
	} catch (err) {
		res.status(400).json(`Error!!! ${err}`);
	}
});

module.exports = router;
