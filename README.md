# Die Lernwerkstatt [![Build Status](https://travis-ci.org/Lernwerkstatt/site.svg?branch=master)](https://travis-ci.org/Lernwerkstatt/site)

![Die Lernwerkstatt Logo](http://res.cloudinary.com/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/v1/253787/Zeichenfla%CC%88che_2_Kopie_170_qemx0s.png)

> „Die Lernwerkstatt“ (Learning Workshop) is a space where learning is a collaborative, creative and self-determined activity.
> People of all ages are welcome to join us!

- [Legacy(legacy) website](http://en-die-lernwerkstatt.strikingly.com/)
- [New website](https://lernwerkstatt-site.azurewebsites.net/)

## Development

1. Create `.env` and populate it with needed data.

```
DB_HOST=XXX
FB_TOKEN=XXX
FB_PAGE_ID=XXX
```

2. Install dependencies with `npm install`
3. Run development server `npm start`

### Change Bootsrtap style

1. Import `/static/css/_variables.scss` to [Boostrap.build](https://bootstrap.build/app)
2. Change style.
3. Export everything to `/static/css` folder.
