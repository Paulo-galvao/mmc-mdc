let menor = 0;
let maior = 0;
let i = 0;

const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let mmc = 1;

rl.question("Digite um número: ", function(num1) {
    parseFloat(num1);
    rl.question("Digite outro:", function(num2) {
        parseFloat(num2);    
        
        if(num1 > num2) {
            maior = num1;
            menor = num2;
        } else {
            maior = num2;
            menor = num1;
        }

        while(!(mmc % num1 == 0 && mmc % num2 == 0)) {
            mmc++;
        }       

        i = menor;

        for(i; i > 0; i--) {
            if(num1 % i == 0 && num2 % i ==0) {
                console.log("MDC: " + i);
                break;
            }
        }

        console.log(`O mmc entre ${num1} e ${num2} é ${mmc}`);
        rl.close();

    })
})