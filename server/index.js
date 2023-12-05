const app = require("./src/app");
const { sequelize } = require("./src/db");
const PORT = 3001;

sequelize.sync({ force: true})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`)
    });
  })
  .catch(error => console.log(error.message));
