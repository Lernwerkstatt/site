const express = require("express");

const router = express.Router();

const blogsRouter = require("./blogs.js");
const contactRouter = require("./contact.js");
const friendsRouter = require("./friends.js");
const galleryRouter = require("./gallery.js");
const homeRouter = require("./home.js");
const partnersRouter = require("./partners.js");
const projectsRouter = require("./projects.js");
const subscribeRouter = require("./subscribe.js");
const supportRouter = require("./support.js");
const teamRouter = require("./team.js");
const valuesRouter = require("./values.js");

router.use(blogsRouter);
router.use(contactRouter);
router.use(friendsRouter);
router.use(galleryRouter);
router.use(homeRouter.router);
router.use(partnersRouter);
router.use(projectsRouter);
router.use(supportRouter);
router.use(subscribeRouter);
router.use(teamRouter);
router.use(valuesRouter);

module.exports = router;
