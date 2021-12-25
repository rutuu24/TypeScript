class person {
    private name: string;
    private adharno: string;
    private mobileno: string;

    constructor(n: string, a: string, m: string) {
        this.name = n;
        this.adharno = a;
        this.mobileno = m;
    }

    get(): void {
        this.name = "Rutuja";
        this.adharno = "242424242424";
        this.mobileno = "9876543210";

    }

    display(): void {
        console.log("Name: " + this.name);
        console.log("adharno: " + this.adharno);
        console.log("mobileno: " + this.mobileno);
    }

}

let p = new person("A", "B", "c");
//p.get();
p.display();