class toyota implements Car {
 brand: string;
 model: string;
 year: number;


 constructor(brand: string, model:string , year:number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
 }

starEngine(): void{
 console.log("Engine Started!");
}

}

