"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {

    //Seed users
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "testuser",
          email: "test@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "dummy",
          email: "a@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    //seed space
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "SpaceA",
          description: "spaceADescript",
          backgroundColor: "",
          color: "",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          title: "SpaceB",
          description: "spaceBDescript",
          backgroundColor: "#ff0000",
          color: "#ffffff",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2
        }
      ],
      {}
    );

    //seed stories
    await queryInterface.bulkInsert(
      "storys",
      [
        {
          name: "story 1",
          content: "Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
          imageURL: "",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1
        },
        {
          name: "story 2 longer much long ertitl",
          content: "Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna.",
          imageURL: "https://i.kym-cdn.com/photos/images/newsfeed/001/207/210/b22.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1
        },
        {
          name: "story 3",
          content: "Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna.",
          imageURL: "https://images.easytechjunkie.com/man-in-black-working-at-computer.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2
        },
      ],
      {}
    );

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
    await queryInterface.bulkDelete("spaces", null, {});
    await queryInterface.bulkDelete("storys", null, {});
  },
};
