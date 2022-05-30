const gridContainer = document.querySelector(".grid-container")

let btnPlay = document.getElementById("btnPlay");
let sizeGrid = 0;

let gameOver = false;



/* al click faccio partire tutto */
btnPlay.addEventListener("click", function() {
    let numberBomb = [];
    gridContainer.innerHTML = "";
    let difficulty = document.getElementById("difficulty");

let difficultyUser = difficulty.value;


    if (difficultyUser === "Facile") {
        sizeGrid = 10;
    } else if (difficultyUser === "Media") {
        sizeGrid = 9;
    } else if (difficultyUser === "Difficile") {
        sizeGrid = 7;
    }
console.log(difficultyUser);




/* creo un funzione che mi genera un griglia in base ai valori inseriti */
function createGrid(xCells, yCells) {
    /* calcolo la larghezza della griglia in base a quante celle voglio aggiungere per riga */
    gridContainer.style.width = `calc(var(--box-size) * ${xCells})`;
    
    /* calcolo in munero di celle che voglio ottenere */
    const cellsNumber = xCells * yCells;


    /* creo x numeri random unici da assegnare alle bombe */
    function uniqueNumber (xCells) {

    for (let i = 0; i < xCells + 2; i++) {
            let numeroRandom = Math.floor(Math.random() * (cellsNumber)) + 1;
            console.log(numberBomb);
        if (!numberBomb.includes(numeroRandom)) {
            numberBomb.push(numeroRandom);

        } else {
            i--
        }
    }
        return numberBomb;
    }
uniqueNumber(xCells)

    /* creo un ciclo che mi genera in numero di cella che voglio */
    for (let i = 0; i < cellsNumber; i++) {
        /* ottengo tot numeri ordinati */
        const numberCell = i + 1;
        
        const cell = document.createElement("div");

        cell.classList.add("cell");
        cell.innerHTML ="";
        cell.innerHTML = `<span>${numberCell}</span>`;

        
        gridContainer.append(cell);


        /* aggiungo un classe al click sul numero */
        cell.addEventListener("click", function () {
            console.log(gameOver);
        
            
            // this = l'elemento che ha generato l'evento usato nel addEventListener
            console.log("hai cliccato il numero", this.innerText);
        
            const numero = parseInt(this.innerText);
        
            this.classList.add("color-click");

            if (numberBomb.includes(numero)) {
                this.classList.remove("color-click");
                this.classList.add("bomb");
                gameOver = true;
            }
        });
    }

};
createGrid(sizeGrid, sizeGrid)




})