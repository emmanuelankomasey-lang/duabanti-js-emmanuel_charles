class TrotroRoute {
    constructor(from, to, fare) {
        this.from = from;
        this.to = to;
        this.fare = fare;
    }

    summary() {
        return `${this.from} to ${this.to} for GHs ${this.fare.toFixed(2)}`;
    }

    totalEarnings(passengers) {
        return this.fare * passengers;
    }
}

class ExpressRoute extends TrotroRoute {
    constructor(from, to, fare, expressFee) {
        super(from, to, fare);
        this.expressFee = expressFee;
    }

    summary() {
        return `${super.summary()} plus a GHs ${this.expressFee.toFixed(2)} express fee`;
    }

    totalEarnings(passengers) {
        return (this.fare + this.expressFee) * passengers;
    }
}

const madinaRoute = new TrotroRoute("Circle", "Madina", 5);
const temaRoute = new ExpressRoute("Circle", "Tema", 12, 3);
const accraRoute = new TrotroRoute("Kaneshie", "Accra", 4);

console.log(madinaRoute.summary());
console.log(temaRoute.summary());
console.log(accraRoute.summary());
console.log(`Madina route earnings: GHs ${madinaRoute.totalEarnings(30).toFixed(2)}`);
console.log(`Tema express earnings: GHs ${temaRoute.totalEarnings(25).toFixed(2)}`);
