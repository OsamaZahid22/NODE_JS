const path = require('path');

// module.exports = path.dirname(process.mainModule.filename);// depreceated
module.exports = path.dirname(require.main.filename);