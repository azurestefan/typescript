//inheritance! abstract class CsvFileReader with read(): void, mapRow(string[]):MatchData
// inherited by child classes like Matchreader, MovieReader etc

// import fs from 'fs';

// //added generic class with <AnyTypeWeWant> or <T> that is like an argument in a function.
// export abstract class CsvFileReader<T> {
//     data: T[] = [];

//     constructor(public filename: string) {}

//     abstract mapRow(row: string[]): T;

//     read(): void {
//         this.data = fs
//         .readFileSync(this.filename, {
//             encoding: 'utf-8'
//         })
//         .split('\n')
//         .map(
//             (row:string): string[] => {
//              return row.split(',');
//             }
//         )
//         .map(this.mapRow);
//     }

// }