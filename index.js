const models = require('./models/index.js');

function startApp() {
    models.quotes.findAll().then(function(quotes) {
      console.log(" -------------------------- ");
      console.log(quotes);
        // for( var i = 0; i < quotes.length; i++ ) {
        //     console.log(quotes[i].id + " | " + quotes[i].quote);
        // }
    });
}

models.sequelize.sync()
.then(function() {
    startApp();
})
.catch(function (e) {
    throw new Error(e);
});
