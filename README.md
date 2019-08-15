# Die Lernwerkstatt [![Build Status](https://travis-ci.org/Lernwerkstatt/site.svg?branch=master)](https://travis-ci.org/Lernwerkstatt/site)

![Die Lernwerkstatt Logo](http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/v1/253787/Zeichenfla%CC%88che_2_Kopie_170_qemx0s.png)

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
