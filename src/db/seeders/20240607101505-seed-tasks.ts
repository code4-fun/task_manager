import { QueryInterface } from 'sequelize';
import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    const tasks = [];

    for (let i = 0; i < 100; i++) {
      tasks.push({
        id: uuidv4(),
        title: faker.lorem.words(3),
        description: faker.lorem.sentences(2),
        status: faker.helpers.arrayElement(['выполняется', 'выполнено']),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await queryInterface.bulkInsert('Tasks', tasks, {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('Tasks', {}, {});
  }
};
