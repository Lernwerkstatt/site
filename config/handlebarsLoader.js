module.exports = {
  process(src) {
    return {
      code: `
        const Handlebars = require('handlebars');
        Handlebars.registerHelper('__', function(){ return 'i18n' });
        module.exports = Handlebars.compile(\`${src}\`);`,
    };
  },
};
