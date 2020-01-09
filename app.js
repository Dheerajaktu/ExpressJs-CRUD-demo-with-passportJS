var engine = require('express-dot-engine');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
const session = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
const policy = require('./config/middleware');
var homeRouter = require('./routes/home');
var loginRouter = require('./routes/login');
var getDataRouter = require('./routes/getData');
var registerWithEmpRouter = require('./routes/registerWithEmp');
var loginWithEmpRouter = require('./routes/loginWithEmp');
var empLoginSuccessRouter = require('./routes/empLoginSuccess');
var showEmpDataRouter = require('./routes/showEmpData');
var engine = require('express-dot-engine');
var mysqlConnection = require('./database/connection')
var config = require("./config/config");
var passport = require('passport');

require('./config/passport');

app.engine('dot', engine.__express);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'dot');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'dheeraj' }))
app.use(passport.initialize());
app.use(passport.session());

//Routing Access-------------Begin---
app.use('/', homeRouter);
app.use('/home', homeRouter);
app.use('/login', policy.isLogin, loginRouter);
app.use('/loginWithEmp', loginWithEmpRouter);
// app.use('showData', policy.isLogin, showData);
app.use('/register', getDataRouter);
app.use('/registerWithEmp', registerWithEmpRouter);
app.use('/empLoginSuccess', empLoginSuccessRouter);
app.use('/showEmpData', showEmpDataRouter);

//Routing Access--------------End------
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
});
mysqlConnection.manageDatabase();
app.listen(config.port);
module.exports = app; 