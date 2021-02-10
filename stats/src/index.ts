import { CsvFileReader } from './CsvFileReader'; //file system in node.
import { MatchResult } from './MatchResult';

const reader = new CsvFileReader('football.csv');
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


let manUnitedWins = 0;

for (let match of reader.data) {
    if(match[1] === 'Man United' && match[5] ===MatchResult.HomeWin){
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin){
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games` )