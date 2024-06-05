"use strict";
// npx ts-node src/server.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
var port = 3000;
app.use((0, cors_1.default)());
// configuracion del servidor para server archivos estáticos
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.get('/', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, 'public', 'index.html'));
});
// iniciar el servidor
app.listen(port, function () {
    console.log("Servidor corriendo en http://localhost:".concat(port));
});
