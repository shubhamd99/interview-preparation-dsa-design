// In proxy pattern, a class represents functionality of another class.
// This type of design pattern comes under structural pattern.
// In proxy pattern, we create object having original object to interface its functionality to outer world.

// External API Service
function CryptocurrencyAPI() {
    this.getValue = function(coin) {

        console.log("Calling External API");
        switch(coin) {
            case "Bitcoin":
                return "$3,500";
            case "Litecoin":
                return "$600";
            case "Ethereum":
                return "$175";
        }
    }
}

// const api = new CryptocurrencyAPI();
// console.log(api.getValue("Bitcoin"));

function CryptocurrencyAPIProxy() {
    this.api = new CryptocurrencyAPI();
    this.cache = {};

    this.getValue = function(coin) {
        console.log("cache", this.cache);
        if (!this.cache[coin]) {
            this.cache[coin] = this.api.getValue(coin);
        }
        return this.cache[coin];
    }
}

const proxy = new CryptocurrencyAPIProxy();
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Litecoin"));