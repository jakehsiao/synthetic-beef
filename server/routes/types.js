const router = require('express').Router();
let types = require('../models/types.model');

router.route('/').get((req, res) => {
  types.find()
    .then(types => res.json(types))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const url = req.body.url;
 

  const newtypes = new types({
    username,
    description,
    url,
  });

  newtypes.save()
  .then(() => res.json('types added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  types.findById(req.params.id)
    .then(types => res.json(types))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  types.findByIdAndDelete(req.params.id)
    .then(() => res.json('types deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  types.findById(req.params.id)
    .then(exercise => {
      types.username = req.body.username;
      types.description = req.body.description;
      types.url = req.body.duration;

      types.save()
        .then(() => res.json('types updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;