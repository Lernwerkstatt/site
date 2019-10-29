# Die Lernwerkstatt

[![Build Status](https://travis-ci.org/Lernwerkstatt/site.svg?branch=master)](https://travis-ci.org/Lernwerkstatt/site)
[![LGTM](https://badgen.net/badge/icon/lgtm?icon=lgtm&label&color=green)](https://www.youtube.com/watch?v=COUaNmm53VA)
[![Node](https://badgen.net/badge/icon/Node.js?icon=https://simpleicons.now.sh/node-dot-js/026e00&label&color=green)](https://nodejs.org)
[![Mongo](https://badgen.net/badge/icon/mongoDB?icon=https://simpleicons.now.sh/mongodb/13aa52&label&color=green)](https://www.mongodb.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

![Die Lernwerkstatt Logo](https://bbb.wandelwoche.org/wp-content/uploads/2019/06/lernwerkstatt.png)

> „Die Lernwerkstatt“ (Learning Workshop) is a space where learning is a collaborative, creative and self-determined activity.
> People of all ages are welcome to join us!

## Development Setup

1. Install [node](https://nodejs.org/en/)
2. Install [npm](https://www.npmjs.com/)
3. Create an `.env` file in `site/` and ask a teammate for the required keys.

```
DB_HOST=XXX
FB_TOKEN=XXX
FB_PAGE_ID=XXX
PIXLEE_INSTAGRAM_API_KEY=XXX
PIXLEE_INSTAGRAM_WIDGET_ID=XXX
```

4. Install dependencies with `npm install`
5. Run the development server with `npm start`

## Changing the Bootstrap style

1. Import `/static/css/_variables.scss` to [Boostrap.build](https://bootstrap.build/app)
2. Change style.
3. Export everything to `/static/css` folder.

## Updating the Instagram Feed

We use [Pixlee](https://socialfeed.pixlee.com/) to provide us an embeddable Instagram feed. Follow these steps to connect your account.

1. Create an account at [Pixlee](https://socialfeed.pixlee.com/signup)
2. Follow the on-screen instructions to link your Instagram account
3. You will be displayed a code snippet for embedding the feed into HTML. Find the string labeled `apiKey`, and copy it into your `.env` file as `PIXLEE_INSTAGRAM_API_KEY`
4. In the same code snippet find the string labeled `widgetID`, and copy it into your `.env` file as `PIXLEE_INSTAGRAM_WIDGET_ID`
   - _It seems you can only copy the entire code snippet from Pixlee. When asking non-technical users to authenticate, it may be easier to ask them to copy the whole snippet, and later separate ourselves._

_Note:_
The `apiKey` will be sent unencrypted to the client. This does not seem to be a security concern, as per an email from Pixlee themselves:

> We use both a public key and a private key in our API. The key which you have linked to is the public key which may be shared with anyone without any concern for access to private or secure data. It is simply used by our system to verify that the widget Id is for the correct account so that it may properly return the corresponding gallery.

## Caching Events

We cache our Facebook events and blog entries from MongoDB every hour to speed up the site load time.

**To invalidate the cache use `/invalidate` endpoint. It will refetch events and blog posts and redirect to the main page.**
