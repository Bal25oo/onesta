"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var typeorm_1 = require("typeorm");
var agricultor_1 = require("./agricultor");
var Cliente = /** @class */ (function () {
    function Cliente() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", String)
    ], Cliente.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Cliente.prototype, "Nombre", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Cliente.prototype, "Apellido", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return agricultor_1.Agricultor; }, function (agricultor) { return agricultor.clientes; }),
        __metadata("design:type", agricultor_1.Agricultor)
    ], Cliente.prototype, "agricultor", void 0);
    Cliente = __decorate([
        (0, typeorm_1.Entity)()
    ], Cliente);
    return Cliente;
}());
exports.Cliente = Cliente;
