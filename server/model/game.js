const db = require("./../database");

const createGame = (req, res, next) => {
  // TODO: save created game as the value of the res.locals.game key
  // req.body will have the key quizID which should be saved to the game model
  // const query = `INSERT INTO player(displayName) VALUES($1)`;
  // const values = ["SomeDisplayName"];
  // // callback
  // db.query(query, (err, res) => {
  //   console.log("DB response");
  //   if (err) {
  //     console.log(err.stack);
  //   } else {
  //     console.log(res);
  //     // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
  //   }
  //   next();
  // });
};

const getGame = (req, res, next) => {};

const joinGame = (req, res, next) => {};

module.exports = { createGame };
