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

        while(!(mmc % num1 == 0 && mmc % num2 == 0)) {
            mmc++;
        }       
        console.log(`O mmc entre ${num1} e ${num2} é ${mmc}`);
        rl.close();
    })
})

