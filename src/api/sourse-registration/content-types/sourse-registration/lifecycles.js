module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi
        .plugin("email")
        .service("email")
        .send({
          from: process.env.EMAIL_USERNAME,
          to: process.env.PERSONAL_EMAIL,
          subject: "Новая регистрация на курс",
          text: `${result.name}`,
        });
    } catch (error) {
      console.log(error);
    }
  },
};
