/*
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/
let UserTrial = prompt('Scegli la difficoltà: Facile, Medio o Difficile?')

if (UserTrial == "Facile") {
    easy()
}
else if (UserTrial = "Medio") {
    medium()
}
else if (UserTrial = "Difficile") {
    Hard()
}
else {
    document.getElementById('container').innerHTML = "Inserire la difficolta, grazie :)"
}




function easy() {
    const cont = document.getElementById('container');
    for (let i = 1; i <= 100; i++) {
        const Cell = document.createElement("div");
        Cell.classList.add("gridcell");
        cont.append(Cell);

        Cell.addEventListener('click', function () {
            this.style.backgroundColor = "skyblue";
            // console.log('cliccato');
        })
    }
}