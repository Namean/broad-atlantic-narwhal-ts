import express from 'express';
const router = express.Router();
/* GET user listing. */
export const indexRouter = router.get("/", function (req, res, next) {
    res.send("Hello from broad-atlantic-narwhal-ts");
});
//# sourceMappingURL=root.route.js.map