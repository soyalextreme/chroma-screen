"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
app.set("port", process.env.PORT || 3000);
app.use(express_1.default.static(path_1.default.join(__dirname + "/public")));
app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
    console.log(path_1.default.join(__dirname + "/public"));
});
