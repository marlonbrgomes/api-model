import express from 'express';

let router = express.Router();

router.post('/sample', (req, response) => {
  if(req.body.test)
    response
      .status(500)
      .send({err: 'Sample Error'});

  else
    response
      .send({payload: {text: 'Sample Success'} })
});

export default router;
