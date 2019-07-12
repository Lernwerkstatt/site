const express = require("express");

const router = express.Router();

const homeRouter = require("./home.js");
const aboutRouter = require("./about.js");
const blogsRouter = require("./blogs.js");
const contactRouter = require("./contact.js");
const learnRouter = require("./learn.js");
const partners = require("./partners.js");
const projects = require("./projects.js");
const subscribeRouter = require("./subscribe.js");
const supportRouter = require("./support.js");

router.use(homeRouter.router);
router.use(aboutRouter);
router.use(blogsRouter);
router.use(contactRouter);
router.use(learnRouter);
router.use(partners);
router.use(projects);
router.use(subscribeRouter);
router.use(supportRouter);

module.exports = router;
