class car{
    private type: string;
    private model: string;
    private color: string;

    constructor(t:string, m:string, c:string){
        this.type = t;
        this.model = m;
        this.color = c;
    }

    display():void{
        console.log("type: " + this.type);
        console.log("model: " + this.model);
        console.log("color: " + this.color);
    }
}

let c = new car("BMW", "2021", "Black");
c.display();
c = new car("innova", "2015", "grey");
c.display();