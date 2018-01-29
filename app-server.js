const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require('fs');

// Start Express
const app = express();
const staging = express();
const PORT = 8080 || process.env.port;

/* ************************************
            STAGING SETTINGS
 ************************************/

// Middleware
// staging.use(express.static(path.join(__dirname, "../staging")));
// staging.use('/.well-known', express.static(path.join(__dirname, "../staging/.well-known"))); //LetsEncrypt
// staging.use(bodyParser.json());

// // CORS
// staging.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// // Routes
// staging.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, "../staging/index.html"));
// });

// // Default to index for react-router
// staging.use( function(req, res) {
//     var reqPath = req.url;
//     if(fs.existsSync(path.join(__dirname, "../staging/"+reqPath)))
//         res.sendFile(path.join(__dirname, "../staging/"+reqPath));
//     else {
//         res.status(404).send("File Not Found");
//     }
// });

// // Start Server
// staging.listen(process.env.PORT, process.env.IP, function() {
//     console.log("Started listening on port", 8091);
// });


/* ************************************
           PRODUCTION SETTINGS
   ************************************/

// Middleware
app.use(express.static(path.join(__dirname, "./dist")));
app.use('/.well-known', express.static(path.join(__dirname, "./dist"))); //LetsEncrypt
app.use(bodyParser.json());

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "./dist/index.html"));
});

// Default to index for react-router
app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "./dist/index.html"));
});

// Start Server
app.listen(PORT, function() {
    console.log("Started listening on port", PORT);
});
