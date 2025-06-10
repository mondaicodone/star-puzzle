var rows = 4;
var columns = 4;

var currentTile;
var otherTile;

var turns = 0;

window.onload = function(){

    for (let r = 0; r < rows; r++){
        for (let c = 0; c < columns; c++){
            
            let tile = document.createElement("img");
            tile.src = "blankwhite.png";

            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("dragleave", dragLeave);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);
            document.getElementById("board").append(tile);
        }

    }

    let pieces = [];
    for (let i = 1; i <= rows*columns; i++){
        pieces.push(i.toString());
    }
    pieces.reverse();
    for (let i = 0; i < pieces.length; i++){
        let j = Math.floor(Math.random() * pieces.length);

        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }

    for (let i = 0; i < pieces.length; i++){
        let tile = document.createElement("img");
        tile.src = "./images/" + pieces[i] + ".png";
        
        tile.addEventListener("dragstart", dragStart);
        tile.addEventListener("dragover", dragOver);
        tile.addEventListener("dragenter", dragEnter);
        tile.addEventListener("dragleave", dragLeave);
        tile.addEventListener("drop", dragDrop);
        tile.addEventListener("dragend", dragEnd);

        


        document.getElementById("pieces").append(tile); 
    }
}

function dragStart(){
    currentTile = this;
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
}
function dragLeave(){}

function dragDrop(){
    otherTile = this;
}

function dragEnd(){
    if (currentTile.src.includes("blankwhite")) {
        return;
    }
    let currentImg = currentTile.src;
    let otherImg = otherTile.src;
    currentTile.src = otherImg;
    otherTile.src = currentImg;


}
