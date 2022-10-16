const { Router } = require('express');
const app = require('../server');
const functions = require('../functions');

const router = Router();

router.get('/', functions.getAllActors);
router.post('/', functions.registerActor);
router.put('/', functions.updateActor);
router.delete('/:id', functions.deleteActor);

module.exports = router;
