"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const home_routes_1 = __importDefault(require("./routes/home.routes"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const port = process.env.PORT || 3000;
const corsOption = { origin: "*" };
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json()); // body parser
app.use((0, cors_1.default)(corsOption));
app.use('/token', home_routes_1.default); // use routef for token
app.get('/', (req, res) => {
    res.status(200).send({ "status": 200, "message": "server is up" });
});
// Add this error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(err.message);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
