#!/bin/env node
"use strict";
/*
 * src/controllers/book.controller.ts
 * */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Book = require('../models/book');
const Author = require('../models/Author');
const Genre = require('../models/genre');
const BookInstance = require('../models/bookinstance');
const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');
index = asyncHandler((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Get details of books, book_instances, authors and genre counts (in paralell)
    const [numBooks, numBooksInstances, numAvailableBookInstances, numAuthors, numGenres] = yield Promise.all([
        Book.countDocuments({}).exec(),
        BookInstance.countDocuments({}).exec(),
        BookInstance.countDocuments({ status: "Available" }).exec(),
        Author.countDocuments({}).exec(),
        Genre.countDocuments({}).exec()
    ]);
}));
