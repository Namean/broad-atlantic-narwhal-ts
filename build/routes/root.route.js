"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRouter = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/* GET user listing. */
exports.indexRouter = router.get("/", function (req, res, next) {
    res.send("Hello from broad-atlantic-narwhal-ts");
});
//# sourceMappingURL=root.route.js.map