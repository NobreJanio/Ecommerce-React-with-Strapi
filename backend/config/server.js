module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  url: env('URL', 'https://ecommerce-90e52.web.app'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
