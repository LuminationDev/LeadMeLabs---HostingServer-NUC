const version = require("../Utilities/helpers");

module.exports = (app) => {
    //Hosting the station
    app.get('/program-nuc-version', (req, res) => {
        console.log("Serving Nuc version");
        version(req, res, "NUC_Version");
    });

    app.get('/program-nuc', (req, res) => {
        const file = __dirname + '/Applications/NUC.zip';
        console.log("Serving nuc file");
        res.download(file);
    });
};
