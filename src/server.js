module.exports.init = config =>{
    let _config = require('./core/utils/config')(config);
    const app = require("./app")(_config);
    app.listen(_config.port, () => {
        console.log(`Server listening on port ${_config.port}`)
    });
};