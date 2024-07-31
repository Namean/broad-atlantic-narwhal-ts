#!/bin/env node
"use strict";
/*
 * src/models/book.model.ts
 *
 * */
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const _schema = {
    title: { type: String, required: true },
    author: { type: Schema.ObjectId, ref: "Author", required: true },
    summary: { type: String, required: true },
    isbn: { type: String, required: true },
    genre: [{ type: Schema.ObjectId, ref: "Genre" }],
};
const bookSchema = new Schema(_schema);
