// mis variables de ambiente
const env = {
  // para el express
  listenOn: 'localhost',
  puerto: 3000,
  // para el postgres
  database: 'stock',
  usuario: 'root',
  clave: 'divi1312',
  host: 'localhost',
  port: 3006,
  dialect: 'mysql',
  // http://docs.sequelizejs.com/manual/installation/usage.html
  // pool de conexiones
  max: 5,
  min: 0,
  idle: 30000,
  acquire: 60000,
};

module.exports = env;
