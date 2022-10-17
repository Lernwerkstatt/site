const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fixturesFolder: false,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://die-lernwerkstatt.org',
    supportFile: false,
  },
})
