const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('./databaseHelper');

passport.use(new LocalStrategy({ usernameField: 'username', passwordField: 'password' }, function (username, password, done) {
  db.findOne("userProfiles", { username: username, password: password }).then(result => {
    // console.log("===========PASSPORT CALLING =======", result)
    if (!result) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    let user = {};
    user.id = result.id;
    user.username = result.username;
    user.firstName = result.firstName;
    done(null, user);
  }).catch(e => {
    console.log('error', e);
    done(e, null);
  })
}
));
passport.serializeUser(function (user, cb) {
  cb(null, user.id);

});



passport.deserializeUser(function (id, done) {

  db.findOne("userProfiles", { id: id }).then(result => {
    if (!result) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    let user = {};
    user.id = result.id;
    user.username = result.username;
    user.firstName = result.firstName;
    done(null, user);
  }).catch(e => {
    console.log('error', e);
    done(e, null);
  })
});