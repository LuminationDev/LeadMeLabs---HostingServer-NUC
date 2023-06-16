const fs = require("fs");

function version(req, res, fileName) {
    const file = __dirname + `../Versions/${fileName}.txt`; // Replace with the actual path to your Version.txt file

    try {
        const data = fs.readFileSync(file, 'utf8');
        res.send(`${data} ${baseURL(req)} 8e619a0ea8c776bff9d8bb3c34a68bed11ff6e65`);
    } catch (err) {
        console.error('Error reading version file:', err);
        res.status(500).send('Error reading version file');
    }
}

//Get the base URL of the current hosting site and return the program route (the queried minus the version string)
function baseURL(req) {
    let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    return fullUrl.replace("-version", "");
}

module.exports = version;