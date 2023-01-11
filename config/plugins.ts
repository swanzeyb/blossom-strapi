module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  'gcalendar': {
    enabled: true,
    resolve: './src/plugins/gcalendar'
  },
})
