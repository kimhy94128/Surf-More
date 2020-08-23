const express = require('express');
const router = express.Router();
const db = require('./db');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.query(`select * from items ORDER BY added DESC;`, (err, rows) => {
    console.log('에러', err);
    console.log(rows);
    res.render('shop', {rows: rows});
  })
});

router.get('/:category', (req, res) => {
  const category = req.params.category;
  const sql = `SELECT * FROM items LEFT JOIN category ON items.category = category.no WHERE category.name_eng = ? ORDER BY added DESC;`
  db.query(sql, [category], (err, rows) => {
    res.render('shop', {rows: rows});
  })
})

router.get('/:category/:second', (req, res) => {
  const category = req.params.category;
  const second = req.params.second;
  const sql = `SELECT * FROM items LEFT JOIN category ON items.category = category.no LEFT JOIN second_cate ON items.second_cate = second_cate.no WHERE category.name_eng = ? AND second_cate.cate_name = ? ORDER BY added DESC;`
  db.query(sql, [category, second], (err, rows) => {
    res.render('shop', {rows: rows});
  })
})

// router.get('/:item_no', (req, res) => {
//   const item_no = req.params.item_no;
//   db.query(`select * from items WHERE item_no = ?;`, [item_no], (err, rows) => {
//     res.render('product', {rows: rows[0]})
//   })
// })

module.exports = router;
