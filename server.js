const app = require('./backend/app');

const port = process.env.PORT || 8080;
app.set('port', port);
app.listen(port);
