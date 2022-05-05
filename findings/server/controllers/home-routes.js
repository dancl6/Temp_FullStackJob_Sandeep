const router = require('express').Router();
const db = require('../db');

// Get route for grouped findings
router.get('/grouped_findings',  (req, res) => {
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

// Get route for raw findings
router.get('/raw_findings',  (req, res) => {
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

// Get route that creates inner join for intersection of raw findings and grouped findings on the
// grouped findings id
router.get('/joined_findings',  (req, res) => {
  const sql = `SELECT grouped_findings.id,  raw_findings.severity, raw_findings.finding_created, raw_findings.source_security_tool_name,
  raw_findings.description, raw_findings.asset, raw_findings.status, raw_findings.grouped_finding_id
  FROM grouped_findings
  INNER JOIN raw_findings ON grouped_findings.id= raw_findings.grouped_finding_id;`
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



module.exports = router;