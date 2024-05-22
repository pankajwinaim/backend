const app = require('./app');
const sequelize = require('../../shared-orm-library/src/index');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {  // set force to true if you want to recreate tables
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
