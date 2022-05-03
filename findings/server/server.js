const express = require('express');
const sequelize = require('./config/connection');
const session = require('express-session');
const routes = require('./controllers');
const path = require('path');
const app = express();
const db = require('./test');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const PORT = process.env.PORT || 3002;
// const sess = {
//     secret: "temp",
//     cookie: {
//       maxAge: (1000 * 60 * 60)
//     },
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//       db: sequelize
//     })
//   };

//   var sequelize = new Sequelize('your_database_name', 'user', 'password', {
//     host: "localhost", //your server
//     port: 3306, //server port
//     dialect: 'mysql'
//   });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(session(sess));
app.use(routes);
// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
//   });


// Start server after DB connection
db.on('open', () => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });