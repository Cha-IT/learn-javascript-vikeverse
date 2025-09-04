function writeAndLog(message) {
    console.log(message);
    document.write(`<p>${message}</p>`);
}

// Oppgave 1
const navn = prompt("Hva heter du?");
writeAndLog(`Hei ${navn}`);

// Oppgave 2
const tall1 = Number(prompt("Skriv inn første tall:"));
const tall2 = Number(prompt("Skriv inn andre tall:"));
const operators = [
    { sign: "+", fn: (a, b) => a + b },
    { sign: "-", fn: (a, b) => a - b },
    { sign: "*", fn: (a, b) => a * b },
    { sign: "/", fn: (a, b) => a / b }
];
operators.forEach(op => writeAndLog(`${tall1} ${op.sign} ${tall2} = ${op.fn(tall1, tall2)}`));

// Oppgave 3
const alder = Number(prompt("Hvor gammel er du?"));
writeAndLog(alder < 18 ? "Du får ikke kjøpe øl" : "Du får kjøpe øl");

// Oppgave 4
const bussAlder = Number(prompt("Hvor gammel er du (for bussbillett)?"));
writeAndLog(
    bussAlder < 18 ? "Du kan kjøpe barnebillett" :
    bussAlder < 67 ? "Du kan kjøpe voksenbillett" :
    "Du kan kjøpe honnørbillett"
);
