function findPossibleMoves(x, y) {
    var possibleMoves = [];
    var a = [1, 1, -1, -1, 2, 2, -2, -2];
    var b = [2, -2, 2, -2, 1, -1, 1, -1];
    for (var i = 0; i < 8; i++) {
        var newX = x + a[i];
        var newY = y + b[i];
        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            possibleMoves.push([newX, newY]);
        }
    }
    return possibleMoves;
}
function move(event, id) {
    event.preventDefault();
    var x = parseInt(id.substring(0, 1));
    var y = parseInt(id.substring(2, 3));
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            // remove existing class piece and canMove
            document.getElementById(i + "-" + j).classList.remove("piece");
            document.getElementById(i + "-" + j).classList.remove("canMove");
        }
    }
    var currentPiece = document.getElementById(id);
    currentPiece.setAttribute("class", "piece");
    var possibleMoves = findPossibleMoves(x, y);
    for (var i = 0; i < possibleMoves.length; i++) {
        document.getElementById(possibleMoves[i][0] + "-" + possibleMoves[i][1]).classList.add("canMove");
    }
}
var table = document.getElementById("chessboard");
var chessboard = [];
// create chessboard in html
for (var i = 0; i < 8; i++) {
    var row = table.insertRow(i);
    chessboard.push([]);
    var _loop_1 = function (j) {
        var cell = row.insertCell(j);
        cell.setAttribute("id", i + "-" + j);
        chessboard[i].push(cell);
        cell.addEventListener("click", function (event) {
            move(event, cell.id);
        });
    };
    for (var j = 0; j < 8; j++) {
        _loop_1(j);
    }
}
