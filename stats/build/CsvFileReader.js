"use strict";
//Composition refactor
//class MatchReader is characterized by having a reference to another object
// reader in class MatchReader is anything that meets the DataReader interface,
// the loader was delegated to outside readers(reference to) such as class ApiReader, class CsvFileReader
// this allows you to swap in different types of readers to customize MatchReader.
// Use inheritance when there is an 'is a' relationship between two classes.
// Use the composition approach when there is a 'has a' relationship.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map(function (row) {
            return row.split(',');
        });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
