// creazione quadrati
// const buttonElement = document.querySelector("#start");

// buttonElement.addEventListener("click", function() {
//    for(let i = 0; i <= 100; i++) {
//        const divElement = document.createElement("div");
//        divElement.classList.add("square");
//        document.querySelector(".grid").innerHTML = divElement;
//        console.log(this);
//    }
// });

// console.log();

// ------- CAMBIO METODO ----------

const gridElement = document.querySelector(".grid");
const buttonElement = document.querySelector("#start");

buttonElement.addEventListener("click", function() {
    
    gridElement.classList.toggle('nascosta');

    for(let i = 1; i <= 100; i++) {
        const squareElement = document.createElement('div');
        squareElement.classList.add('square');
        squareElement.textContent = i;
        gridElement.appendChild(squareElement);


        // cambio colore al click del numero

        squareElement.addEventListener('click', function() {
            squareElement.style.backgroundColor = 'green';
            
            // aggiungo il numero della casella in console
            console.log('Hai cliccato la casella numero: ', i);
        });


    }


});


console.log(gridElement);
console.log(squareElement);