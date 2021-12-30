function findPossibleMoves(x: number,y: number){
    
    let possibleMoves = [];
    let a = [1,1,-1,-1,2,2,-2,-2];
    let b = [2,-2,2,-2,1,-1,1,-1];
    for(let i = 0; i<8; i++){
        let newX = x + a[i];
        let newY = y + b[i];
        if(newX>=0 && newX<8 && newY>=0 && newY<8){
            possibleMoves.push([newX,newY]);
        }
    }
    return possibleMoves;
}

function move(event:any, id:string) {
    event.preventDefault();
    let x = parseInt(id.substring(0, 1));
    let y = parseInt(id.substring(2, 3));
    for(let i = 0;i<8;i++){
        for(let j = 0; j< 8; j++){
            // remove existing class piece and canMove
            document.getElementById(i+"-"+j).classList.remove("piece");
            document.getElementById(i+"-"+j).classList.remove("canMove");
        }
    }
    let currentPiece = document.getElementById(id);
    currentPiece.setAttribute("class", "piece");
    let possibleMoves = findPossibleMoves(x, y);
    for(let i = 0; i<possibleMoves.length; i++){
        document.getElementById(possibleMoves[i][0]+"-"+possibleMoves[i][1]).classList.add("canMove");
    }

}


let table:any = document.getElementById("chessboard")
let chessboard: any[] = [];
// create chessboard in html
for (let i = 0; i < 8; i++) {
    let row = table.insertRow(i);
    chessboard.push([]);
    for (let j = 0; j < 8; j++) {
        let cell = row.insertCell(j);
        cell.setAttribute("id", i + "-" + j);
        chessboard[i].push(cell);
        cell.addEventListener("click", function (event) {
            move(event, cell.id);
        });
    }
}

