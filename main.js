// Algoritmo simples para somar numeros primos
/* Codado ao som de:
*                   Cannibal Corpse: Scourge of Iron
*                   Cannibal Corpse: Evisceration Plague                  
*                   Ghostmane: John Dee
*                   LaFuria; Mete Seu Cachorro
*                   
*                   **(Jamais tente entender minha playlist!)
*/

function primeNumbers(num) {

    let numbers = new Array();

    function checkPrime(num) {
        for(let i = 2; i < num; i++)
            if(num % i === 0) {
                return false
            };
            return num > 1;
    }

    for(let i = 0; i <= num; i++) {
        if(checkPrime(i)) {
            numbers.push(i);
        }
    }

    const reduceR = (accumulator, curr) => accumulator + curr;
    let sum = numbers.reduce(reduceR);

    return sum;
}

console.log("The sum of pryme numbers is: " + primeNumbers(1000));