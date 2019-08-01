const express = require("express");
const morgan = require("morgan");
const hbs = require("express-handlebars");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const helmet = require("./middlewares/helmet.js");

const routes = require("./routes");

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet);

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views/`);
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "main",
    partialsDir: `${__dirname}/views/partials/`,
    layoutsDir: `${__dirname}/views/layouts/`
  })
);

app.use(express.static(`${__dirname}/../static`));
app.use(favicon(`${__dirname}/../static/img/favicon.ico`));

app.use(routes);

app.use((req, res) => {
  res.status(404).render("error");
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
