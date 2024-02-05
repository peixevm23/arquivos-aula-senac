 export interface car {
     brand: string;
     model: string;
     year:  number;
     startEngine(): void;
     stopEngine?(): void;
}
