// START Import tweets routes
const tweetsRouter = require('./routes/tweets');
// END Import tweets routes

// START Use tweets routes
app.use('/tweets', tweetsRouter);
// END Use tweets routes