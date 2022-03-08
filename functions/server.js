const app = require('./backend/app');

const port = process.env.PORT || 4000;
app.set('port', port);
app.listen(port);
module.exports.handler = async (event, context) => {
    const unixTime = Math.floor(Date.now() / 1000);
    return {
      statusCode: 200,
      body: `The Unix time iss ${unixTime}`,
    };
  };
