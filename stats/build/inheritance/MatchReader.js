"use strict";
// child class that gets parsed csv file data from CsvFileReader.
// import {CsvFileReader} from './CsvFileReader';
// import {dateStringToDate} from './utils';
// import {MatchResult} from './MatchResult';
// type MatchData = [Date, string, string, number, number, MatchResult, string];
// export class MatchReader extends CsvFileReader<MatchData> {
//     mapRow(row:string[]): MatchData {
//         return [
//              // since this must be in a specific order, use tuple. Defined MatchData type above.
//             dateStringToDate(row[0]),
//             row[1],
//             row[2],
//             parseInt(row[3]),
//             parseInt(row[4]),
//             row[5] as MatchResult, //Type Assertion.
//             row[6]
//         ];
//     }
// }
