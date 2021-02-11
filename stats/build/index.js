"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader"); //file system in node.
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResult_1 = require("./MatchResult");
// Create an object that satisfies the 'DataReader' interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
//matchReader.matches
// **For Generic refactor**
// const reader = new MatchReader('football.csv');
// reader.read();
//this is unclear code clarified code is below
// for (let match of matches) {
//     if(match[1] === 'Man United' && match[5] ==='H'){
//         manUnitedWins++;
//     } else if (match[2] === 'Man United' && match[5] === 'A'){
//         manUnitedWins++;
//     }
// }
//refactored code using typescript feature
// const homeWin = 'H';
// const awayWin = 'A';
// const draw = 'D';
// const MatchResult = {
//     HomeWin: 'H',
//     AwayWin: 'A',
//     Draw: 'D'
// };
// identifiers/object above will be replaced with typescript's enum
// enum is used over objects because it signals to engineers that these are a set of closely related values
var manUnitedWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");
