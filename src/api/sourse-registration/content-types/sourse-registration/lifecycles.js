module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi
        .plugin("email")
        .service("email")
        .send({
          from: process.env.EMAIL_USERNAME,
          to: process.env.EMAIL_TO,
          subject: "Новая регистрация на курс",
          text: `${result.name}`,
        });
    } catch (error) {
      console.log(error);
    }
  },
};
