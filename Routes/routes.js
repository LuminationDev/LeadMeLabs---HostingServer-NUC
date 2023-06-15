const helpers = require("../Utilities/helpers");

module.exports = (app) => {
    //Hosting the station
    app.get('/program-nuc-version', (req, res) => {
        console.log("Serving station version");
        helpers.version(req, res, "NUC_Version");
    });

    app.get('/program-station', (req, res) => {
        var file = __dirname + '/Applications/NUC.zip';
        res.download(file);
    });
};
