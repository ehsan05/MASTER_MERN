import express from 'express';

const noteRouter = express.Router();

noteRouter.post('/', (req, res) => {
  res.send('Note Post Request');
});


export default noteRouter;