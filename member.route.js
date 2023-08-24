/** load express js */
const express = require(`express`)

/**  create object of express */
const app = express()


const memberController = require(`../controllers/member.controller`)

/**allow route to read urlencoded data */
app.use(express.urlencoded({ extended: true }))

/**create route for access telur's data */
app.get("/", memberController.showDataMember)

/** create route for show add telur view */
app.get("/add", memberController.showAddPage)

/** create route for process of add new obat */
app.post("/add", memberController.processInsert)

/** create route for show edit obat view */
app.get("/edit/:id", memberController.showEditPage)
    /** :id -> name of paramter URL */

/** create route for process edit obat */
app.post("/edit/:id", memberController.processUpdate)

/** :id -> name of paramter URL */


/** create route for process delete obat */
app.get("/delete/:id", memberController.processDelete)
    /** :id -> name of paramter URL */

/* export object "app" to another file*/
module.exports = app