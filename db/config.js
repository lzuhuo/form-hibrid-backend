
require('dotenv').config()
let env;
if(process.env.NODE_ENV === 'prod'){
  env = require('./config.prod.json');
}else{
  env = require('./config.dev.json');
}

const config = env.dbconnection;

module.exports = config;