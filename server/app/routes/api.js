var mongoose = require("mongoose");
var passport = require("passport");
var config = require("../config/database");
require("../config/passport")(passport);
var express = require("express");
var jwt = require("jsonwebtoken");
var router = express.Router();
var User = require("../models/user");

router.post("/signup", function(req, res) {
    var credentials = {
        username: req.body.username,
        password: req.body.password
    };

    if (credentials.username === "" || credentials.password === "") {
        res.json({ success: false, msg: "Please pass username and password." });
    } else {
        // Check if the username already exists for non-social account
        User.findOne({
                username: new RegExp("^" + req.body.username + "$", "i"),
                socialId: null
            },
            function(err, user) {
                if (err) throw err;
                if (user) {
                    return res.json({ success: false, msg: "Username already exists." });
                } else {
                    User.create(credentials, function(err, newUser) {
                        res.json({ success: true, msg: "Successful created new user." });
                    });
                }
            }
        );
    }
});

router.post("/signin", function(req, res) {
    var credentials = {
        username: req.body.username,
        password: req.body.password
    };
    User.findOne({
            username: new RegExp("^" + req.body.username + "$", "i"),
            socialId: null
        },
        function(err, user) {
            if (err) throw err;
            if (!user) {
                res
                    .status(401)
                    .send({
                        success: false,
                        msg: "Authentication failed. User not found."
                    });
            } else {
                // check if password matches
                user.validatePassword(req.body.password, function(err, isMatch) {
                    if (isMatch && !err) {
                        // if user is found and password is right create a token
                        var token = jwt.sign(user, config.secret);
                        // return the information including token as JSON
                        res.json({ success: true, token: "JWT " + token });
                    } else {
                        res
                            .status(401)
                            .send({
                                success: false,
                                msg: "Authentication failed. Wrong password."
                            });
                    }
                });
            }
        }
    );
});

router.post("/book", passport.authenticate("jwt", { session: false }), function(
    req,
    res
) {
    var token = getToken(req.headers);
    if (token) {
        console.log(req.body);
        var newBook = new Book({
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            publisher: req.body.publisher
        });

        newBook.save(function(err) {
            if (err) {
                return res.json({ success: false, msg: "Save book failed." });
            }
            res.json({ success: true, msg: "Successful created new book." });
        });
    } else {
        return res.status(403).send({ success: false, msg: "Unauthorized." });
    }
});

router.get("/book", passport.authenticate("jwt", { session: false }), function(
    req,
    res
) {
    var token = getToken(req.headers);
    if (token) {
        Book.find(function(err, books) {
            if (err) return next(err);
            res.json(books);
        });
    } else {
        return res.status(403).send({ success: false, msg: "Unauthorized." });
    }
});

getToken = function(headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(" ");
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};

module.exports = router;