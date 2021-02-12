"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader"); //file system in node.
var Summary_1 = require("./Summary");
// Create an object that satisfies the 'DataReader' interface
//const csvFileReader = new CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
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
// let manUnitedWins = 0;
// for (let match of matchReader.matches) {
//     if(match[1] === 'Man United' && match[5] ===MatchResult.HomeWin){
//         manUnitedWins++;
//     } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin){
//         manUnitedWins++;
//     }
// }
//console.log(`Man United won ${manUnitedWins} games` )
