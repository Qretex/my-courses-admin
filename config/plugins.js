module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        service: env("SMTP_SERVICE"),
        host: env("SMTP_HOST"),
        port: env.int("SMTP_PORT"),
        secure: true,
        auth: {
          user: env("EMAIL_USERNAME"),
          pass: env("EMAIL_PASSWORD"),
        },
      },
    },
  },
});
