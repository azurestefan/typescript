"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader"); //file system in node.
var MatchResult_1 = require("./MatchResult");
var reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
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
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");
