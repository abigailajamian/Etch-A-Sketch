let size = document.querySelector(".size");
size.addEventListener('click', setSize);
function setSize(){
    let input = prompt("What size grid would you like?");
    if(input<=100){
        createGrid(input);
    } else{
        console.log('Please pick a number less than or equal to 100');
    }
}


function createGrid(num){
    resetGrid();
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    
    for (let i = 0; i<num*num; i++){
        let square= document.createElement("div");
        square.style.backgroundColor="gray";
        board.insertAdjacentElement('beforeend',square);
        square.classList.add("boxes");
    }
    
    
    let boxes=document.getElementsByClassName("boxes");
    for(let i= 0; i<boxes.length;i++){
        boxes[i].addEventListener('mouseover',mouseOver);
    }
}

createGrid(16);

function mouseOver(){
    this.style.backgroundColor = "white";
}

function resetGrid (){
    let boxes=document.getElementsByClassName("boxes");
    while(boxes.length>0){
        let boxes=document.getElementsByClassName("boxes");
        boxes[0].remove();
    }
}
