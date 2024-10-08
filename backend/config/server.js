module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('URL', 'https://ecommerce-react-with-strapi.onrender.com'), // URL do backend no Render
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
  cors: {
    enabled: true,
    origin: ['https://ecommerce-90e52.web.app'], // URL do frontend
  },
});

