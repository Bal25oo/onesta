"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var cosecha_rutas_1 = __importDefault(require("./rutas/cosecha_rutas"));
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var app = (0, express_1.default)();
var port = 3000;
(0, typeorm_1.createConnection)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api_cos', cosecha_rutas_1.default);
app.listen(port, function () {
    console.log('Server expres en: http://localhost:${port}');
});
