const pjson = require('./package.json');
let pjPath = pjson.scripts.path

const demo = require('d2ctokenizer');
demo.run(pjPath)