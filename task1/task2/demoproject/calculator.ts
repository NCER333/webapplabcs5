//data: 
//initial amount
// annual contribution
// expect return
// duration 

type Data = {
    initialAmount: number;
    annualContribution: number;
    expectReturn: number;
    duration: number;
};

type InvestmentResult = {
    year: string;
    totalAmount: number;
    totalContributions: number;
    totalInterest: number;

};
function calculateInvestment(data: Data) : InvestmentResult[] | string{ // => returns an array or a string if something is wrong
    const {initialAmount, annualContribution, expectReturn, duration} = data; //grab everything

    if(initialAmount < 0){
        return "Error, put a valid initial amount"
    }

    if(annualContribution <= 0 ){
        return "Error, put a valid value of the annual contribution"
    }
    let total = initialAmount;
    let totalContributions = 0;
    let totalInterest = 0;

    const annualResults: InvestmentResult[] = []; // results per year

    for(let i = 0; i < duration; i++){
        total = total * (1 + expectReturn);
        totalInterest = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;

        //now i have to populate the array 

        annualResults.push({
            year : `Year ${i + 1}`, 
            totalAmount: total,
            totalInterest,
            totalContributions
        });
    }

    return annualResults; //with this i can get off the error on the return type of the functions of course 
}  

function printResult(results: InvestmentResult[] | string){
    if(typeof results === 'string'){ //just check if there is a string or real results 
        console.log(results);
        return;
    }

    console.table(results); //in this way i can have a clean table of my datas



}
const myData: Data = { //exmples of datas to use to try the program
    initialAmount: 10000,
    annualContribution: 1200,
    expectReturn: 0.05,
    duration: 10
};

const results = calculateInvestment(myData);


printResult(results);