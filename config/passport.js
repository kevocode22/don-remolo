const passport = require('passport') 
const jwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt

const User = require('../models/users')

module.exports = passport.use(
    new jwtStrategy(
        {jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.SECRET_KEY},
         (jwt_payload,done) => {
            // console.log(jwt_payload);
            User.findOne({_id:jwt_payload.id})
            .then ( User => {
                if (User) {
                    return done(null, User)
                }
             
                else {
                    return done(null, false)
                }
            }
            )
            .catch(error => {
                console.log(error)
                return done(error,false)   
            })
         }
) )