module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4f7ba61c223ac1e09c37e25e242bad90'),
  },
});
