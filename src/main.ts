#!/bin/env node
import express from 'express';
import { AddressInfo } from 'net';


const app = express();

import { indexRouter } from "./routes/root.route";
console.log("Hello World!");

app.use("/", indexRouter);

const PORT = 9001; // Its over 9000!!
var listener = app.listen(PORT, function () {
  const addressString = listener.address() as AddressInfo;
  console.log(`Your app is listenting on port ${addressString['port']}`);
})
