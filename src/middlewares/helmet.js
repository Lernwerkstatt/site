const helmet = require("helmet");

module.exports = [
  // The `hidePoweredBy` middleware will remove the `X-Powered-By` header.
  // You can also explicitly set the header to something else, to throw
  // people off. e.g. `helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' })`
  helmet.hidePoweredBy(),
  // The `X-XSS-Protection` HTTP header is a basic protection.  When the browser
  // detects a potential injected script using an heuristic filter,
  // it changes it, making the script not executable.
  helmet.xssFilter(),
  // This middleware sets the X-Content-Type-Options header to `nosniff`,
  // instructing the browser to not bypass the provided `Content-Type`.
  helmet.noSniff(),
  // The `X-Frame-Options` header set by this middleware restricts who can put
  // your site in a frame. It has three modes: DENY, SAMEORIGIN, and ALLOW-FROM.
  helmet.frameguard({ action: "deny" }),
  // This middleware sets the `X-Download-Options` header to `noopen`,
  // to prevent IE users from executing downloads in the *trusted* site's context.
  helmet.ieNoOpen()
];
