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

      router.get('/joined_findings',  (req, res) => {
        // grouped_findings.findAll({
       const sql = `SELECT  grouped_findings.severity, grouped_findings.grouped_finding_created , 
       grouped_findings.sla, grouped_findings.description, grouped_findings.security_analyst,
       grouped_findings.owner, grouped_findings.workflow, grouped_findings.status,
        raw_findings.severity, raw_findings.finding_created, raw_findings.source_security_tool_name,
        raw_findings.description, raw_findings.asset, raw_findings.status
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