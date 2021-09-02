// In Strategy pattern, a class behavior or its algorithm can be changed at run time.
// This type of design pattern comes under behavior pattern. All Strategy is a function.
// In Strategy pattern, we create objects which represent various strategies and a context object whose behavior
// varies as per its strategy object. The strategy object changes the executing algorithm of the context object.

function Fedex() {
    this.calculate = package => {
        // Fedex calculations
        console.log("Package: ", package);
        return 2.45;
    }
}

function UPS() {
    this.calculate = package => {
        // UPS calculations
        console.log("Package: ", package);
        return 1.56;
    }
}

function USPS() {
    this.calculate = package => {
        // USPS calculations
        console.log("Package: ", package);
        return 4.5;
    }
}


// Strategy
function Shipping() {
    this.company = null;

    this.setStrategy = (company) => {
        this.company = company;
    };

    this.calculate = package => {
        return this.company ? this.company.calculate(package) : " No Company Selected";
    }
}

const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();

const package = { from: "New York", to: "Texas", weight: 1.20 };

const shipping = new Shipping();

shipping.setStrategy(fedex);
console.log("Fedex: ", shipping.calculate(package));

shipping.setStrategy(ups);
console.log("UPS: ", shipping.calculate(package));

shipping.setStrategy(usps);
console.log("USPS: ", shipping.calculate(package));
