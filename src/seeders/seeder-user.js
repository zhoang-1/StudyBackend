'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456',
      firstName: 'Tam',
      lastName: 'Tang',
      address: 'eaky krong pac dak lak',
      phoneNumber:'103224424',
      gender: 1,
      image: '??',
      roleID: 'ROLE',
      positionId:'1331',
      
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async  (queryInterface, Sequelize) =>{
    return queryInterface.bulkDelete('Users', null, {});
  }
};
