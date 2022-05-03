"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MyFirstController = void 0;
var common_1 = require("@nestjs/common");
var MyFirstController = /** @class */ (function () {
    function MyFirstController() {
    }
    MyFirstController.prototype.index = function () {
        return { 'key': 'value' };
    };
    __decorate([
        (0, common_1.Get)('hello-world')
    ], MyFirstController.prototype, "index");
    MyFirstController = __decorate([
        (0, common_1.Controller)('my-first')
    ], MyFirstController);
    return MyFirstController;
}());
exports.MyFirstController = MyFirstController;
