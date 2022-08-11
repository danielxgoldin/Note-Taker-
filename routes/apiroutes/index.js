const router = require('express').Router();
const notesRoutes = require('./notesroutes')

router.use(notesroutes);

module.exports = router;