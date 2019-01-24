const express = require("express");

const router = express.Router();

const homeRouter = require("./routes/home.js");
const aboutRouter = require("./routes/about.js");
const blogsRouter = require("./routes/blogs.js");
const contactRouter = require("./routes/contact.js");
const coursesRouter = require("./routes/courses.js");
const learnRouter = require("./routes/learn.js");
const supportRouter = require("./routes/support.js");
const workshopsRouter = require("./routes/workshops.js");
const subscribeRouter = require("./routes/subscribe.js");

router.use(homeRouter.router);
router.use(aboutRouter);
router.use(blogsRouter);
router.use(contactRouter);
router.use(coursesRouter);
router.use(learnRouter);
router.use(supportRouter);
router.use(workshopsRouter);
router.use(subscribeRouter);

module.exports = router;
