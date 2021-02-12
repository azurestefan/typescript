//Composition refactor
//class MatchReader is characterized by having a reference to another object
// reader in class MatchReader is anything that meets the DataReader interface,
// the loader was delegated to outside readers(reference to) such as class ApiReader, class CsvFileReader
// this allows you to swap in different types of readers to customize MatchReader.
// Use inheritance when there is an 'is a' relationship between two classes.
// Use the composition approach when there is a 'has a' relationship.

import fs from 'fs';

export class CsvFileReader {
    data: string[][] = [];

    constructor(public filename: string) {}

    read(): void {
        this.data = fs
        .readFileSync(this.filename, {
            encoding: 'utf-8'
        })
        .split('\n')
        .map(
            (row:string): string[] => {
             return row.split(',');
            }
        );
       
    }
}