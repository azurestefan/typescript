export abstract class Sorter {
  //interface that provides instructions on how to be eligible for sorting
  //can do anything as long as you provide the length property, the compare function, and the swap function.
    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;
    abstract length: number;
  
    sort(): void {
      const { length } = this;
  
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
          if (this.compare(j, j + 1)) {
            this.swap(j, j + 1);
          }
        }
      }
    }
  }