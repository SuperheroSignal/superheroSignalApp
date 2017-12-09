'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn('users', 'facebook_id', Sequelize.STRING)
      .then(() => {
        return queryInterface.addColumn('users', 'facebook_email', Sequelize.STRING)
      })
      .then(() => {
        return queryInterface.addColumn('users', 'facebook_name', Sequelize.STRING)
      })
      .then(() => {
        return queryInterface.addColumn('users', 'facebook_token', Sequelize.STRING)
      })

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn('users', 'facebook_id')
      .then(() => {
        return queryInterface.removeColumn('users', 'facebook_email')
      })
      .then(() => {
        return queryInterface.removeColumn('users', 'facebook_name')
      })
      .then(() => {
        return queryInterface.removeColumn('users', 'facebook_token')
      })

  }
};