const express = require("express");

const router = express.Router();

const blogsRouter = require("./blogs.js");
const contactRouter = require("./contact.js");
const friendsRouter = require("./friends.js");
const galleryRouter = require("./gallery.js");
const homeRouter = require("./home.js");
const imprintRouter = require("./imprint.js");
const manifestoRouter = require("./manifesto.js");
const openkiRouter = require("./openki.js");
const partnersRouter = require("./partners.js");
const podcastsRouter = require("./podcasts.js");
const policyRouter = require("./policy.js");
const projectsRouter = require("./projects.js");
const subscribeRouter = require("./subscribe.js");
const supportRouter = require("./support.js");
const teamRouter = require("./team.js");
const valuesRouter = require("./values.js");
const serviceRouter = require("./service.js");

router.use(blogsRouter);
router.use(contactRouter);
router.use(friendsRouter);
router.use(galleryRouter);
router.use(homeRouter);
router.use(imprintRouter);
router.use(manifestoRouter);
router.use(openkiRouter);
router.use(partnersRouter);
router.use(podcastsRouter);
router.use(policyRouter);
router.use(projectsRouter);
router.use(supportRouter);
router.use(subscribeRouter);
router.use(teamRouter);
router.use(valuesRouter);

// This router has to be the last one to handle errors
router.use(serviceRouter);

module.exports = router;
