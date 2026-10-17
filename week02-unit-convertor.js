function cediToDollar(cediAmount, exchangeRate = 0.086){
    let dollarAmount = cediAmount * exchangeRate;
    return dollarAmount.toFixed(2);
    }
console.log(`GHS ${1000}$ = USD ${cediToDollar(1000)}`);

function kmToMiles(km, rate = 0.621371){
    let miles = km * rate;
    return miles.toFixed(2);
}
console.log(`${2000} km = ${kmToMiles(2000)} miles`);

function celsiusToFahrenheit(celsius, rate = 1.8, offset = 32){
    let fahrenheit = (celsius * rate) + offset;
    return fahrenheit.toFixed(2);
}
console.log(`${30}°C = ${celsiusToFahrenheit(30)}°F`);