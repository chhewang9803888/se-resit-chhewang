# Lab 4 — Routing Requests with Express

The Lab 4 work was completed **inside the Lab 3 scaffolding application**, since the
routing exercises modify that same Express app. The routes live in:

- [`../lab3-docker/app/app.js`](../lab3-docker/app/app.js)

Routes added/modified for this lab:

- `/` — personalised root route ("hello Chhewang")
- `/roehampton` — logs `req.url` and its first 3 characters via `.substring(0, 3)`
- `/hello/:name` — dynamic route using `req.params`
- `/user/:id` — dynamic route with one URL parameter
- `/student/:name/:id` — dynamic route with two URL parameters
- `/db_test/:id` — queries the database by id (parameterised query) and returns HTML

Run the app with `cd ../lab3-docker && docker-compose up`, then test the routes at
`http://127.0.0.1:3000/`.
