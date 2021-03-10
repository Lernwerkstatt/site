const express = require("express");
const morgan = require("morgan");
const hbs = require("express-handlebars");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const i18n = require("i18n");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const mongoose = require("mongoose");

const helmet = require("./middlewares/helmet.js");
const routes = require("./routes");

const port = process.env.PORT || 3000;
const app = express();

// Enable gzip compression
app.use(compression());

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(helmet);
app.use(express.static(`${__dirname}/../static`));
app.use(favicon(`${__dirname}/../static/img/favicon.ico`));

// Set up i18n
i18n.configure({
  locales: ["en", "de"],
  directory: `${__dirname}/locales`,
  defaultLocale: "de",
  cookie: "locale",
  queryParameter: "lang",
  api: {
    __: "__",
    __n: "__n",
  },
});
app.use(i18n.init);

// Connect to database
mongoose.connect(process.env.DB_HOST, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handlebars for templating
app.set("view engine", "hbs");
app.set("views", `${__dirname}/views/`);
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "main",
    partialsDir: `${__dirname}/views/partials/`,
    layoutsDir: `${__dirname}/views/layouts/`,
    helpers: {
      /* eslint-disable */
      __() {
        return i18n.__.apply(this, arguments);
      },
      __n() {
        return i18n.__n.apply(this, arguments);
      },
      section(name, options) {
        if (!this._sections) this._sections = {};
        this._sections[name] = options.fn(this);
        return null;
      },
      /* eslint-enable */
    },
  })
);

// Routes
app.use(routes);

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
