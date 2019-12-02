const passport = require('passport');
const Strategy = require('passport-local').Strategy;

const usersModel = require('./models/usersModel');

passport.use(
    new Strategy({ usernameField: 'userName', passwordField: 'password' }, (userName, passwd, cb) => {
        usersModel.find({ userName }, (err, [user]) => {
            if (err) {
                return cb(err);
            }
            if (!user) {
                return cb(null, false);
            }
            if (user.password != passwd) {
                return cb(null, false);
            }
            return cb(null, user);
        });
    })
);

passport.serializeUser((user, cb) => {
    cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
    usersModel.find({ _id: id }, (err, [user]) => {
        if (err) {
            return cb(err);
        }
        cb(null, user);
    });
});

module.exports = passport;
