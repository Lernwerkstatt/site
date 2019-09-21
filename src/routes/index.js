const express = require("express");

const router = express.Router();

const aboutRouter = require("./about.js");
const blogsRouter = require("./blogs.js");
const contactRouter = require("./contact.js");
const galleryRouter = require("./gallery.js");
const homeRouter = require("./home.js");
const partnersRouter = require("./partners.js");
const projectsRouter = require("./projects.js");
const subscribeRouter = require("./subscribe.js");
const supportRouter = require("./support.js");
const valuesRouter = require("./values.js");

router.use(aboutRouter);
router.use(blogsRouter);
router.use(contactRouter);
router.use(galleryRouter);
router.use(homeRouter.router);
router.use(partnersRouter);
router.use(projectsRouter);
router.use(supportRouter);
router.use(subscribeRouter);
router.use(valuesRouter);

module.exports = router;
