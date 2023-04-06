const express = require('express');
const router = express.Router();
const {
  setData,
  getData,
  getCounts,
  incCounts,
} = require('../controller/dataController');

// 값 보낼때는 post
router.post('/setdata', setData);
router.get('/getdata', getData);
router.get('/getcount', getCounts);
router.post('/inccount', incCounts);

module.exports = router;
