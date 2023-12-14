const router = require("express").Router({ mergeParams: true });
const controller = require("./seating.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/")
  .put(controller.update)
  .delete(controller.unassign)
  .all(methodNotAllowed);

module.exports = router;