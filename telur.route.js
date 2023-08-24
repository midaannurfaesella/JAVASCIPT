/** load express js */
const express = require(`express`)

/**  create object of express */
const app = express()

/** load telur controller*/
const telurController = require(`../controllers/telur.controller`)

/**allow route to read urlencoded data */
app.use(express.urlencoded({ extended: true }))

/**create route for access telur's data */
app.get("/", telurController.showDataTelur)

/** create route for show add telur view */
app.get("/add", telurController.showAddPage)

/** create route for process of add new obat */
app.post("/add", telurController.processInsert)

/** create route for show edit obat view */
app.get("/edit/:id", telurController.showEditPage)
    /** :id -> name of paramter URL */

/** create route for process edit obat */
app.post("/edit/:id", telurController.processUpdate)

/** :id -> name of paramter URL */


/** create route for process delete obat */
app.get("/delete/:id", telurController.processDelete)
    /** :id -> name of paramter URL */

/* export object "app" to another file*/
module.exports = app