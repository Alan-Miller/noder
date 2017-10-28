/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
    Imports
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const   express = require('express'),
        bodyParser = require('body-parser'),
        data = require('./data'),
        bookCtrl = require('./book_controller'),
        app = express(),
        port = 3000;  // safe ports: 3000–12000  // don't use 80 or 443


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
    Middleware
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
app.use(bodyParser());
        

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
    Endpoints
    
    CRUD
    Create  —   Post 
    Read    —   Get
    Update  —   Put
    Delete  —   Delete

    app.METHOD('URL', HANDLER)
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
app.get('/api/getBooks', bookCtrl.get);
app.post('/api/addBook', bookCtrl.post);
app.put('/api/updateBook/:index/:title', bookCtrl.put);
app.delete('/api/removeBook/:index', bookCtrl.delete);


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
    Listen
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});