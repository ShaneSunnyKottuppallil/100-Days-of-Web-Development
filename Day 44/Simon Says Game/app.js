let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let para = document.createElement("p");
let title = document.querySelector(".title");
let buttons = document.querySelectorAll("button");
let redbtn = document.querySelector(".red");
let bluebtn = document.querySelector(".blue");
let greenbtn = document.querySelector(".green");
let yellowbtn = document.querySelector(".yellow");
let colarr = [], num = 1;


let randcol = [];

function gencol(randcol) {
    let randnum = Math.floor((Math.random() * 4) + 1);
    if (randnum == 1) {
        randcol.push("red");
    }
    if (randnum == 2) {
        randcol.push("blue");
    }
    if (randnum == 3) {
        randcol.push("green");
    }
    if (randnum == 4) {
        randcol.push("yellow");
    }
    return randcol;
}
for (let i = 0; i < 15; i++) {
    gencol(randcol);
}
for(let i=0;i<randcol.length;i++){
    para.innerHTML=randcol;
    body.appendChild(para);
}

let l=15;
clrflash(randcol,l);


function clrflash(randcol, l) {
    for (let i = 0; i < randcol.length; i++) {
        setTimeout(() => {
            console.log(i, randcol[i]);
            if (randcol[i] == "red") {
                blankclr(redbtn);
            } else if (randcol[i] == "blue") {
                blankclr(bluebtn);
            } else if (randcol[i] == "green") {
                blankclr(greenbtn);
            } else if (randcol[i] == "yellow") {
                blankclr(yellowbtn);
            }
        }, i * 1600); // Delay increases for each iteration (1.2s apart)
    }
}

function blankclr(btn) {
    btn.classList.add("blank");
    setTimeout(() => {
        btn.classList.remove("blank");
    }, 1500); // Keeps blank for 1 second
}


for (button of buttons) {
    button.addEventListener("click", function (event) {
        colarr.push(event.target.id);
        
        for (let i = 0; i < colarr.length; i++) {
            console.log(colarr[i]);
            if (randcol[i] == colarr[i]) {
                title.innerHTML = `Level ${i + 1} completed`;
            }
            else {
                console.log("wrong");
                title.innerHTML = `You Lost!`;
                break;
            }
        }
        console.log("\n");
    })
}


