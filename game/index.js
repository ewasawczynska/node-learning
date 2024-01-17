const readline = require("readline");
const { program, CommanderError }= require('commander');
const fs = require("fs").promises

require("colors");

program.option('-f, --file [name]', 'File for saving game results', 'results.txt')
program.parse(process.argv)

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
});

let count = 0;
const numberToGuess = Math.floor(Math.random() * 10) + 1
// floor - zaokrąglenie
// random - losowa liczba, moze byc ulamkiem dziesietnym
const fileToSave = program.opts().file

const isValid = (value) => {
    if (isNaN(value)) {
        console.log(`Musisz wprowadzić liczbę`.red)
        return false
    }
    if (value < 1 || value > 10) {
        console.log(`Liczba powinna być z przediału od 1 do 10`.red)
        return false
    }
    return true
}

// isNan - do spr czy liczba, NaN - not a number


const logResult = async (text) => {
    try {
await fs.appendFile(fileToSave, `${text} \n`)
    console.log('Rezultat udało się zapisać'.green)
    } catch (err) {
        console.log(`Błąd przy zapisie pliku`.red)
    }
}

// appendFile - dodaje do pliku
// "\n" robi od nowej lini

const game = () => {
rl.question('Wprowadź liczbę od 1 do 10, aby zacząć zgadywać: '.yellow, 
async  (answer) => {
const numericAnswer = Number.parseInt(answer, 10)

if (!isValid(numericAnswer)) {
    game()
    return
}

count ++

if (numericAnswer === numberToGuess) {
console.log(`Gratulacje! Odgadłeś liczbę za ${count} razem.`.green)
await logResult(`Liczba prób: ${count}`)
rl.close()
return
}

console.log(`Nie zgadłeś, próbuj dalej, good luck`.red)
game()

})
}

game()

// answer zawsze bedzie stringiem, a potrzebujemy liczby, wiec robimy parseInt


// node index.js - odpala program
// node index.js -f kwa.txt - odpala program i wyniki zapisze do wtedy nowo utworzonego pliku kwa.txt


// yargs jest jak commander