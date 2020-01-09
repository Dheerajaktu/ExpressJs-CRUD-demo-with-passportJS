const passport = require('passport');
const db = require('../config/databaseHelper');

module.exports = {
    register: function (req, res) {
        let promiseList = [];
        promiseList.push(db.create('userProfiles', req.body));
        promiseList.push(db.findOne('roles', { id: req.body.role }));
        Promise.all(promiseList).then((result) => {
            let userProfiles = result[0];
            let role = result[1];
            role.setUserProfiles(userProfiles.id).then(function () {
                return res.redirect('login');

            }).catch(e => {
                console.log('error....', e)
                return res.send({ message: e });
            });

        })
    },
    showData: function (req, res) {
        // console.log('=======SHOW DATA CONTROLLE CALLED=======', req.user);
        db.showData('userProfiles').then(result => {
            // console.log('==========Data from Database in router==========');
            res.render('showData', { result: result });
        })

    },
    login: function (req, res) {
        // console.log("===============LOGIN METHOD CALLING ==========", req.body);
        passport.authenticate('local', function (err, user, info) {

            if (err || !user) {

                return res.render('loginFail');
            }
            else {
                console.log('data...........', user.id);
                if (user) {
                    req.login(user, function (err) {
                        if (err) {
                            return res.send({ Sucess: false, message: 'Something Went Worng' });
                        }
                        return res.redirect('/login/loginSucess');
                    });
                }
            }
        })(req, res);
    }

}