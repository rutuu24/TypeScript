class calculator{
    private num1:number;
    private num2:number;
    private num3:number;
    private num4:number;
    private num5:number;
    private sum:number;
    private average:number;

    get():void{
        this.num1 = 75;
        this.num2 = 80;
        this.num3 = 90;
        this.num4 = 95;
        this.num5 = 65;
        this.sum = this.num1+this.num2+this.num3+this.num4+this.num5;
        this.average = this.sum / 5; 
 }

 display():void{
     console.log("num1: "+this.num1);
     console.log("num2: "+this.num2);
     console.log("num3: "+this.num3);
     console.log("num4: "+this.num4);
     console.log("num5: "+this.num5);
     console.log("sum: "+this.sum);
     console.log("average:"+this.average);
 }
}
let c=new calculator();
c.get();
c.display();