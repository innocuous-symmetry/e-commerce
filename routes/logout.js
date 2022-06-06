const express = require('express');
const logoutRouter = express.Router();

logoutRouter.route('/').delete((req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                res.status(400).send("There was a problem logging out.");
            } else {
                res.send("Logout successful");
            }
        })
    } else {
        res.end();
    }
});

module.exports = logoutRouter;