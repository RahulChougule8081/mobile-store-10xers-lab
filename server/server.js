
const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await sequelize.sync();
  console.log(`Server running on port ${PORT}`);
});
