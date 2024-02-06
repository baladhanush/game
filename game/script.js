
var buttonA = document.getElementById('btna');
var buttonB = document.getElementById('btnb');
var playerAName = document.getElementById('playerA');
var playerBName = document.getElementById('playerB');

buttonA.addEventListener("click", function () {
    var name = prompt("Enter Player's A  name");
    playerAName.innerHTML = name;
})
buttonB.addEventListener("click", function () {
    var name = prompt("Enter Player's B  name");
    playerBName.innerHTML = name;
})

let boxes = document.getElementsByClassName('boxes');

var turn = 1;
let BoxesFilled = 0;

// 036 , 147 258

function isWinner(boxes, turn) {

    let check = ((boxes[0].innerHTML != '' && boxes[1].innerHTML != '' && boxes[2].innerHTML != '' && (boxes[0].innerHTML == boxes[1].innerHTML && boxes[1].innerHTML == boxes[2].innerHTML))
        || (boxes[3].innerHTML != '' && boxes[4].innerHTML != '' && boxes[5].innerHTML != '' && (boxes[3].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[5].innerHTML))
        || (boxes[6].innerHTML != '' && boxes[7].innerHTML != '' && boxes[8].innerHTML != '' && (boxes[6].innerHTML == boxes[7].innerHTML && boxes[7].innerHTML == boxes[8].innerHTML))
        || (boxes[0].innerHTML != '' && boxes[3].innerHTML != '' && boxes[6].innerHTML != '' && (boxes[0].innerHTML == boxes[3].innerHTML && boxes[3].innerHTML == boxes[6].innerHTML))
        || (boxes[1].innerHTML != '' && boxes[4].innerHTML != '' && boxes[7].innerHTML != '' && (boxes[1].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[7].innerHTML))
        || (boxes[2].innerHTML != '' && boxes[5].innerHTML != '' && boxes[8].innerHTML != '' && (boxes[2].innerHTML == boxes[5].innerHTML && boxes[5].innerHTML == boxes[8].innerHTML))
        || (boxes[0].innerHTML != '' && boxes[4].innerHTML != '' && boxes[8].innerHTML != '' && (boxes[0].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[8].innerHTML))
        || (boxes[2].innerHTML != '' && boxes[4].innerHTML != '' && boxes[6].innerHTML != '' && (boxes[2].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[6].innerHTML))
    )
    if (check == true) {
        if (turn == 1) {
            alert("Player A is the Winner")
        }
        else  {
            alert("Player B is the winner")
        }
    }
    return check;
}

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function () {
        if (boxes[i].innerHTML === '' && document.getElementById('A').style.backgroundColor != 'green' && document.getElementById('B').style.backgroundColor != 'green') {
            BoxesFilled++;
            if (turn == 1) {
                boxes[i].innerHTML = 'X';
                let check = isWinner(boxes, turn);
                if (check) {
                    let winner = document.getElementById('A');
                    winner.style.backgroundColor = 'green'
                }
                turn = 2;
            }
            else {
                boxes[i].innerHTML = '0';
                let check = isWinner(boxes, turn);
                if (check) {
                    let winner = document.getElementById('B');
                    winner.style.backgroundColor = 'green'
                }
                turn = 1;
            }
        }
    })
}