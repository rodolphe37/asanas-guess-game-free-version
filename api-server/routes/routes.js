const userRoutes = require('./asanas');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
        res.header('Access-Control-Expose-Headers', 'X-Total-Count');
        res.header('X-Total-Count');
    });

    // // other routes
    userRoutes(app, fs);

};

module.exports = appRouter;
