const express = require("express");
const morgan = require("morgan");
const hbs = require("express-handlebars");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const helmet = require("helmet");

const routes = require("./routes");

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

// The `hidePoweredBy` middleware will remove the `X-Powered-By` header.
// You can also explicitly set the header to something else, to throw
// people off. e.g. `helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' })`
app.use(helmet.hidePoweredBy());
// The `X-XSS-Protection` HTTP header is a basic protection.  When the browser
// detects a potential injected script using an heuristic filter,
// it changes it, making the script not executable.
app.use(helmet.xssFilter());
// This middleware sets the X-Content-Type-Options header to `nosniff`,
// instructing the browser to not bypass the provided `Content-Type`.
app.use(helmet.noSniff());
// The `X-Frame-Options` header set by this middleware restricts who can put
// your site in a frame. It has three modes: DENY, SAMEORIGIN, and ALLOW-FROM.
app.use(helmet.frameguard({ action: "deny" }));
// This middleware sets the `X-Download-Options` header to `noopen`,
// to prevent IE users from executing downloads in the *trusted* site's context.
app.use(helmet.ieNoOpen());

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
  if (app.get("env") === "development") {
    const browserSync = require("browser-sync"); // eslint-disable-line
    browserSync({
      files: ["static/**/*.css", "views/**/*.handlebars"],
      online: false,
      port: port + 1,
      proxy: `localhost:${port}`,
      ui: false
    });
  }
});
