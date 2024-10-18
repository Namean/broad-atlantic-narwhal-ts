#!/bin/env node
import express from 'express';
const app = express();
import { indexRouter } from "./routes/root.route";
console.log("Hello World!");
app.use("/", indexRouter);
const PORT = 9001; // Its over 9000!!
var listener = app.listen(PORT, function () {
    const addressString = listener.address();
    console.log(`Your app is listenting on port ${addressString['port']}`);
});
//# sourceMappingURL=main.js.map