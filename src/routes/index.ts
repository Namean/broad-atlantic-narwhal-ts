#!/bin/env node


/* 
 * src/routes/index.ts
*/


import express from 'express';
const router = express.Router();

/* GET home page */
export const indexRouter = router.get('/', function (req: any, res: any): void {
  res.redirect("/catalog");
})



