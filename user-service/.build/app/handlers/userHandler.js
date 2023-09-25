"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signup = void 0;
const core_1 = __importDefault(require("@middy/core"));
exports.Signup = (0, core_1.default)((event) => {
    console.log(event);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "response form signup"
        })
    };
});
//# sourceMappingURL=userHandler.js.map