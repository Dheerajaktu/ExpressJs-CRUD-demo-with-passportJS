const config = {
    "development": {
        "port": "1300",
        db: {
            "username": "SA",
            "password": "Root@123",
            "database": "database_development",
            "host": "127.0.0.1",
            "dialect": "mssql",
            "operatorsAliases": false,
            "models": "alter",
            logging:false
        }

    },
    "test": {
        "port": "1300",
        db: {
            "username": "root",
            "password": "@@M9045969697l..",
            "database": "database_test",
            "host": "127.0.0.1",
            "dialect": "mysql",
            "operatorsAliases": false,
            "models": "alter",
            logging:false
        }
    },
    "production": {
        "port": "1400",
        db: {
            "username": "root",
            "password": "@@M9045969697l..",
            "database": "database_production",
            "host": "127.0.0.1",
            "dialect": "mysql",
            "operatorsAliases": false,
            "models": "alter"
        }
    }
};

const NODE_ENV = process.env.NODE_ENV || 'development';
const environment = config[NODE_ENV];
config.port = environment.port;
config.DB_CONFIG = environment.db;
config.NODE_ENV = NODE_ENV;

module.exports = config;

