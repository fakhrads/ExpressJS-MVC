module.exports = (sequelize, Sequelize) => {
  const Books = sequelize.define("books", {
    name: {
      type: Sequelize.STRING
    },
    author: {
      type: Sequelize.STRING
    }
  });

  return Books;
};