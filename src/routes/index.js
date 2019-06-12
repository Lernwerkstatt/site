const express = require("express");

const router = express.Router();

const homeRouter = require("./home.js");
const aboutRouter = require("./about.js");
const blogsRouter = require("./blogs.js");
const contactRouter = require("./contact.js");
const learnRouter = require("./learn.js");
const supportRouter = require("./support.js");
const workshopsRouter = require("./workshops.js");
const subscribeRouter = require("./subscribe.js");

router.use(homeRouter.router);
router.use(aboutRouter);
router.use(blogsRouter);
router.use(contactRouter);
router.use(learnRouter);
router.use(supportRouter);
router.use(workshopsRouter);
router.use(subscribeRouter);

module.exports = router;
