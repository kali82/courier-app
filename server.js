const app = require('./backend/app');
const logger = require('./backend/logger');

const port = process.env.PORT || 20000;
app.set('port', port);
logger.info(port)
app.listen(port);
