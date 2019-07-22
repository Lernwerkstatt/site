const express = require("express");

const router = express.Router();

const homeRouter = require("./home.js");
const aboutRouter = require("./about.js");
const blogsRouter = require("./blogs.js");
const contactRouter = require("./contact.js");
const valuesRouter = require("./values.js");
const supportRouter = require("./support.js");
const projects = require("./projects.js");
const subscribeRouter = require("./subscribe.js");

router.use(homeRouter.router);
router.use(aboutRouter);
router.use(blogsRouter);
router.use(contactRouter);
router.use(valuesRouter);
router.use(supportRouter);
router.use(projects);
router.use(subscribeRouter);

module.exports = router;
