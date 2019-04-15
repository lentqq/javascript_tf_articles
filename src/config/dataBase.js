  const mongoose = require('mongoose');

  function dataBase(config) {
      mongoose.connect(config.dbRoute, {
          useNewUrlParser: true
      });

      const db = mongoose.connection;
      db.on('error', console.error.bind(console, 'conection error:'));
      db.once('open', () => console.log('Db Conected'));
  }

  module.exports = dataBase;