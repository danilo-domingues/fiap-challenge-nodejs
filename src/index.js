const app = require('./app');
const config = require(`${process.cwd()}/env.json`);
let _config = require('./core/utils/config')(config);


app.listen(_config.port, () => {
    console.log(`Server listening on port ${_config.port}`)
});