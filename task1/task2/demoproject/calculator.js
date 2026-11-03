"use strict";
//data: 
//initial amount
// annual contribution
// expect return
// duration 
Object.defineProperty(exports, "__esModule", { value: true });
function calculateInvestment(data) {
    const { initialAmount, annualContribution, expectReturn, duration } = data; //grab everything
    if (initialAmount < 0) {
        return "Error, put a valid initial amount";
    }
    if (annualContribution <= 0) {
        return "Error, put a valid value of the annual contribution";
    }
    let total = initialAmount;
    let totalContributions = 0;
    let totalInterest = 0;
    const annualResults = []; // results per year
    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectReturn);
        totalInterest = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;
        //now i have to populate the array 
        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterest,
            totalContributions
        });
    }
    return annualResults; //with this i can get off the error on the return type of the functions of course 
}
function printResult(results) {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }
    console.table(results);
}
const myData = {
    initialAmount: 10000,
    annualContribution: 1200,
    expectReturn: 0.05,
    duration: 10
};
const results = calculateInvestment(myData);
printResult(results);
//# sourceMappingURL=calculator.js.map