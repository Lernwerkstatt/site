const express = require("express");

const router = express.Router();

const homeRouter = require("./home.js");
const aboutRouter = require("./about.js");
const blogsRouter = require("./blogs.js");
const contactRouter = require("./contact.js");
const partnersRouter = require("./partners.js");
const valuesRouter = require("./values.js");
const supportRouter = require("./support.js");
const projectsRouter = require("./projects.js");
const subscribeRouter = require("./subscribe.js");

router.use(homeRouter.router);
router.use(aboutRouter);
router.use(blogsRouter);
router.use(contactRouter);
router.use(partnersRouter);
router.use(valuesRouter);
router.use(supportRouter);
router.use(projectsRouter);
router.use(subscribeRouter);
router.use(supportRouter);

module.exports = router;
