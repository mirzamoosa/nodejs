const path = require('path');
const a= path.basename('C:\\temp\\myfile.html');
const b= path.dirname('C:\\temp\\myfile.html');
const c = path.extname(__filename)
console.log(a);
console.log(b);
console.log(c);