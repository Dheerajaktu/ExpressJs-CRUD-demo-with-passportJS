module.exports.isLogin = function (req, res, next) {
    // console.log('========middleware() called=====', req.user);        
    if (!req.user) {
        console.log('========Middleware() If called=======');
        // document.alert('Need to login first');
        // alert("Need to Login!");
        return res.render('login.dot');
    }
     next();
}
