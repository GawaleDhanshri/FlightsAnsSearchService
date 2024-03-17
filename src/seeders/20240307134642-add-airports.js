// 'use strict';

// const { QueryInterface } = require('sequelize');

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//     */

//     await queryInterface.bulkInsert('Airport'[
//       {
//         name : 'Kempegoda International Airport',
//         cityId : 2,
//         createdAt : new Date(),
//         updatedAt : new Date()
//       },
//       {
//         name : 'Mysuru Airport',
//         cityId : 2,
//         createdAt : new Date(),
//         updatedAt : new Date()
//       },
//       {
//         name : 'Menguluru International Airport',
//         cityId : 2,
//         createdAt : new Date(),
//         updatedAt : new Date()
//       },
//       {
//         name : 'Indira Gandhi International Airport',
//         cityId : 4,
//         createdAt : new Date(),
//         updatedAt : new Date()
//       }

//     ], {})
//   },

//   async down (queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   }
// };

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Kempegowda International Airport',
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mysuru Airport',
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mengaluru International Airport',
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Indira Gandhi International Airport',
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

  }
};