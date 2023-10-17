const passport = require('passport');
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local').Strategy;
const User = mongoose.model('users');

passport.use(new LocalStrategy({
        usernameField: 'email'
    },
    (email, password, done) => {
        console.log(email)
        User.findOne({ email: email }, (err, user) => {
            console.log(user)
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, {
                    message: 'Incorrect username.'
                });
            }
            if (!user.validPassword(password)) {
                return done(null, false, {
                    message: 'Incorrect password.'
                });
            }
            return done(null, user);
        });
    }
));