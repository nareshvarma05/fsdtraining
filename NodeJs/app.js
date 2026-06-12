// const greet = require('./greet');

// console.log(greet("Naresh"));

// const math=require('./math');
// console.log(math.add(10,20));
// console.log(math.sub(20,5));

const os = require('os');

console.log("===== OS MODULE =====");

console.log("Platform:", os.platform());

console.log("Architecture:", os.arch());

console.log("Hostname:", os.hostname());

console.log("OS Type:", os.type());

console.log("OS Release:", os.release());

console.log("Home Directory:", os.homedir());

console.log("Temporary Directory:", os.tmpdir());



const path = require('path');

console.log("File Name:", path.basename(__filename));

console.log("Directory Name:", path.dirname(__filename));

console.log("Extension:", path.extname(__filename));

console.log("Parsed Object:");
console.log(path.parse(__filename));

console.log("Join Paths:");
console.log(path.join('users', 'naresh', 'documents'));
