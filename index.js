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

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan("dev"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/static"));

app.use(homeRouter);
app.use(aboutRouter);
app.use(blogRouter);
app.use(contactRouter);
app.use(coursesRouter);
app.use(learnRouter);
app.use(supportRouter);
app.use(workshopsRouter);

app.use((req, res) => {
  res.status(404).render("error");
});

app.listen(port, function() {
  if (app.get("env") === "development") {
    const browserSync = require("browser-sync");
    browserSync({
      files: ["static/**/*.css", "views/**/*.handlebars"],
      online: false,
      port: port + 1,
      proxy: "localhost:" + port,
      ui: false
    });
  }
});
