# Die Lernwerkstatt

[![Build Status](https://travis-ci.org/Lernwerkstatt/site.svg?branch=master)](https://travis-ci.org/Lernwerkstatt/site)
[![LGTM](https://badgen.net/badge/icon/lgtm?icon=lgtm&label&color=green)](https://www.youtube.com/watch?v=COUaNmm53VA)
[![Node](https://badgen.net/badge/icon/Node.js?icon=https://simpleicons.now.sh/node-dot-js/026e00&label&color=green)](https://nodejs.org)
[![Mongo](https://badgen.net/badge/icon/mongoDB?icon=https://simpleicons.now.sh/mongodb/13aa52&label&color=green)](https://www.mongodb.com/)

![Die Lernwerkstatt Logo](https://bbb.wandelwoche.org/wp-content/uploads/2019/06/lernwerkstatt.png)

> „Die Lernwerkstatt“ (Learning Workshop) is a space where learning is a collaborative, creative and self-determined activity.
> People of all ages are welcome to join us!

- [Current(legacy) website](http://en-die-lernwerkstatt.strikingly.com/)
- [New(developing) website](https://die-lernwerkstatt.azurewebsites.net)

## Development

1. Install [node](https://nodejs.org/en/)
2. Install [npm](https://www.npmjs.com/)
3. Create an `.env` file in `site/` and ask a teammate for the required keys.

```
DB_HOST=XXX
FB_TOKEN=XXX
FB_PAGE_ID=XXX
```

4. Install dependencies with `npm install`
5. Run the development server with `npm start`

### Change Bootstrap style

1. Import `/static/css/_variables.scss` to [Boostrap.build](https://bootstrap.build/app)
2. Change style.
3. Export everything to `/static/css` folder.
