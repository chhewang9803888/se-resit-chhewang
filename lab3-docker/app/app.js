// Import express.js
const express = require("express");

// Create express app
var app = express();

// Add static files location
app.use(express.static("static"));

// Set the view engine to pug and the views folder location
app.set("view engine", "pug");
app.set("views", "./app/views");

// Get the functions in the db.js file to use
const db = require('./services/db');

// Create a route for root - /
app.get("/", function(req, res) {
    res.send("hello Chhewang");
});

// Lab 5: render the Pug index view
app.get("/pug-index", function(req, res) {
    res.render("index", {
        title: "Lab 5 - MVC with Pug",
        heading: "Chhewang Tamang",
        data: ["Git Basics", "HTML Basics", "Docker Environment", "Express Routing", "MVC with Pug"]
    });
});

// Render the names in the database, as a list and as a table
app.get("/db", function(req, res) {
    sql = 'select * from test_table';
    db.query(sql).then(rows => {
        res.render("db", {
            title: "Lab 5 - Database View",
            heading: "Names in test_table",
            rows: rows
        });
    });
});

// Create a route for /roehampton
app.get("/roehampton", function(req, res) {
    console.log(req.url);
    console.log(req.url.substring(0, 3));
    res.send("hello roehampton");
});

// Create a route for testing the db
app.get("/db_test", function(req, res) {
    // Assumes a table called test_table exists in your database
    sql = 'select * from test_table';
    db.query(sql).then(results => {
        console.log(results);
        res.send(results)
    });
});

// Create a route for /goodbye
// Responds to a 'GET' request
app.get("/goodbye", function(req, res) {
    res.send("Goodbye world!");
});

// Create a dynamic route for /hello/<name>, where name is any value provided by user
// At the end of the URL
// Responds to a 'GET' request
app.get("/hello/:name", function(req, res) {
    // req.params contains any parameters in the request
    // We can examine it in the console for debugging purposes
    console.log(req.params);
    //  Retrieve the 'name' parameter and use it in a dynamically generated page
    res.send("Hello " + req.params.name);
});

// Create a dynamic route for /user/<id>
app.get("/user/:id", function(req, res) {
    res.send("User id: " + req.params.id);
});

// Create a dynamic route for /student/<name>/<id>
app.get("/student/:name/:id", function(req, res) {
    res.send("Student name: " + req.params.name + ", id: " + req.params.id);
});

// Create a dynamic route to query the db for a single row by id
app.get("/db_test/:id", function(req, res) {
    sql = 'select * from test_table where id = ?';
    db.query(sql, [req.params.id]).then(results => {
        console.log(results);
        res.send("<h1>" + results[0].name + "</h1>");
    });
});

// Start server on port 3000
app.listen(3000,function(){
    console.log(`Server running at http://127.0.0.1:3000/`);
});