module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '156986a27f1aadf6dddfe3b3f1ffbfd3'),
  },
});
