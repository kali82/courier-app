const app = require('./backend/app');
const logger = require('./backend/logger');

const port = process.env.PORT || 8080;
app.set('port', port);
logger.info(port)
app.listen(port);
