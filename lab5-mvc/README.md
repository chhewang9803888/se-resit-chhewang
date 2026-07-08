# Lab 5 — MVC with Pug Templates

The Lab 5 work was completed **inside the Lab 3 scaffolding application**, since the
MVC/Pug exercises build on that same Express app. The relevant files are:

- Controller (routes + view engine setup): [`../lab3-docker/app/app.js`](../lab3-docker/app/app.js)
- Views (Pug templates): [`../lab3-docker/app/views/`](../lab3-docker/app/views/)
  - `layout.pug` — base layout with a `block content` placeholder
  - `index.pug` — extends the layout; uses variables (`#{heading}`) and an `each` loop
  - `db.pug` — renders database rows as a list and as an HTML table

Routes for this lab:

- `/pug-index` — renders `index.pug` with variables passed from the controller
- `/db` — queries `test_table` and renders the rows through `db.pug`

Run the app with `cd ../lab3-docker && docker-compose up`, then view
`http://127.0.0.1:3000/pug-index` and `http://127.0.0.1:3000/db`.
