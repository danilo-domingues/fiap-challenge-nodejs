let _config = null;

module.exports = config => {
    if(config && !_config) {
        _config = config;
    }
    return _config;
};