const router = require('express').Router();
const sequelize = require('../config/connection');
// const { grouped_findings } = require('')
const db = require('../db');
// const grouped_findings = "grouped_findings"
router.get('/grouped_findings',  (req, res) => {
    // grouped_findings.findAll({
   const sql = `SELECT * from grouped_findings`
   const params = []
   db.all(sql, params, (err, rows)=> {
     if(err) {
       res.status(500).json({ error: err.message})
       return
     }
     res.json({
       message: 'success',
       data: rows
     })
   })
    })

    router.get('/raw_findings',  (req, res) => {
      // grouped_findings.findAll({
     const sql = `SELECT * from raw_findings`
     const params = []
     db.all(sql, params, (err, rows)=> {
       if(err) {
         res.status(500).json({ error: err.message})
         return
       }
       res.json({
         message: 'success',
         data: rows
       })
     })
      })


// .then(dbDate => {
//     console.log("grouped findings is:", dbData)
//   res.send  (dbDate)
// })
// .catch(err => res.status(500).json(err))
// })

module.exports = router;