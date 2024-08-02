export default {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi
        .plugin("email")
        .service("email")
        .send({
          from: process.env.EMAIL_USERNAME,
          to: process.env.EMAIL_TO,
          subject: `Новая запись на курс ${result.course}`,
          text: `
          Имя: ${result.name}
          Телефон: ${result.phone}
          Комментарий: ${result.comment}`,
        });
    } catch (error) {
      console.log(error);
    }
  },
};
