const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const fs = require("fs");

const homeRouter = require("./src/routes/home.js");
const aboutRouter = require("./src/routes/about.js");
const blogRouter = require("./src/routes/blog.js");
const contactRouter = require("./src/routes/contact.js");
const coursesRouter = require("./src/routes/courses.js");
const learnRouter = require("./src/routes/learn.js");
const supportRouter = require("./src/routes/support.js");
const workshopsRouter = require("./src/routes/workshops.js");
const errorRouter = require("./src/routes/error.js");

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan("dev"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/static"));

app.use("/", homeRouter);
app.use("/home", homeRouter);
app.use("/about", aboutRouter);
app.use("/blog", blogRouter);
app.use("/contact", contactRouter);
app.use("/courses", coursesRouter);
app.use("/learn", learnRouter);
app.use("/support", supportRouter);
app.use("/workshops", workshopsRouter);
app.use("*", errorRouter);

app.listen(port);
