"use strict";
const start = document.getElementById('start');
const msg = document.getElementById('content');
const img = document.getElementById('img');
const userScore = document.getElementById('userScore');
const machineScore = document.getElementById('machineScore');
const btn = document.getElementById('btn');
const playBtn = document.getElementById('play');
const rock = document.getElementById('rock');
const papper = document.getElementById('papper');
const scissor = document.getElementById('scissor');
const user = document.getElementById('user');
const machine = document.getElementById('machine');
const loader = document.getElementById('loader');
const storedUserScore = sessionStorage.getItem('UserScore') || '';
const storedMachineScore = sessionStorage.getItem('MachineScore') || '';
const restart = document.getElementById('restart');
const lastImg = sessionStorage.getItem('img') || '';
const gameStart = Boolean(sessionStorage.getItem('Start')) || '';
const container = document.getElementById('container');
restart.setAttribute('disabled', '');
//To restart the game
restart.addEventListener('click', () => {
    rock.setAttribute('disabled', '');
    papper.setAttribute('disabled', '');
    scissor.setAttribute('disabled', '');
    msg.style.display = 'none';
    img.style.display = 'none';
    loader.style.display = 'block';
    setTimeout(() => {
        restart.setAttribute('disabled', '');
        msg.textContent = `Click to start the game.`;
        userScore.style.display = 'none';
        machineScore.style.display = 'none';
        playBtn.style.display = 'none';
        img.style.display = 'none';
        loader.style.display = 'none';
        start.style.display = 'block';
        msg.style.display = 'block';
        loader.style.display = 'none';
        rock.removeAttribute('disabled');
        papper.removeAttribute('disabled');
        scissor.removeAttribute('disabled');
        sessionStorage.clear();
    }, 500);
});
//Condition for refreshing the page
if (storedMachineScore == '' && storedUserScore == '' && gameStart == '') {
    msg.textContent = `Click to start the game.`;
    userScore.style.display = 'none';
    machineScore.style.display = 'none';
    playBtn.style.display = 'none';
    img.style.display = 'none';
    loader.style.display = 'none';
    restart.setAttribute('disabled', '');
}
else {
    if (storedMachineScore != '' && storedMachineScore != '') {
        img.style.display = 'block';
        img.src = `${lastImg}`;
    }
    else {
        img.style.display = 'none';
    }
    restart.removeAttribute('disabled');
    loader.style.display = 'none';
    start.style.display = 'none';
    if (storedMachineScore == '') {
        machine.textContent = '0';
    }
    else {
        machine.textContent = storedMachineScore;
    }
    if (storedUserScore == '') {
        user.textContent = '0';
    }
    else {
        user.textContent = storedUserScore;
    }
}
//Storing the score
let userS = Number(storedUserScore);
let machineS = Number(storedUserScore);
//Starting the game on cliking the start
start.addEventListener('click', () => {
    sessionStorage.setItem('Start', 'true');
    msg.textContent = '';
    start.style.display = 'none';
    loader.style.display = 'block';
    setTimeout(() => {
        restart.removeAttribute('disabled');
        start.style.display = 'none';
        playBtn.style.display = 'block';
        userScore.style.display = 'block';
        machineScore.style.display = 'block';
        loader.style.display = 'none';
        machineS = 0;
        userS = 0;
        machine.textContent = `${machineS}`;
        user.textContent = `${userS}`;
    }, 500);
});
//To generate a randome number
function random() {
    let num = Math.floor(Math.random() * 3);
    return num;
}
//To display the figure
function play() {
    let values = [
        {
            sign: 'rock',
            img: '../images/rock.png',
            title: 'Rock'
        },
        {
            sign: 'paper',
            img: '../images/paper.png',
            title: 'Paper'
        },
        {
            sign: 'scissor',
            img: '../images/scissors.png',
            title: 'Scissor'
        }
    ];
    let select = random();
    return values[select];
}
//Displaying things on clicking the rock
let timer;
rock.addEventListener('click', () => {
    img.style.display = 'none';
    loader.style.display = 'block';
    clearTimeout(timer);
    timer = setTimeout(() => {
        img.style.display = 'block';
        let valuToShow = play();
        img.src = `${valuToShow.img}`;
        img.title = `${valuToShow.title}`;
        let machineNum = valuToShow.sign;
        let lastImgUrl = `${valuToShow.img}`;
        sessionStorage.setItem('img', lastImgUrl);
        switch (machineNum) {
            case 'paper':
                {
                    machineS++;
                    machine.textContent = `${machineS}`;
                    sessionStorage.setItem('MachineScore', `${machineS}`);
                }
                break;
            case 'scissor':
                {
                    userS++;
                    user.textContent = `${userS}`;
                    sessionStorage.setItem('UserScore', `${userS}`);
                }
                break;
            default: {
                // alert("It's a tie");
            }
        }
        loader.style.display = 'none';
    }, 500);
});
//Displaying things on clicking the paper
papper.addEventListener('click', () => {
    img.style.display = 'none';
    loader.style.display = 'block';
    clearTimeout(timer);
    timer = setTimeout(() => {
        img.style.display = 'block';
        let valuToShow = play();
        img.src = `${valuToShow.img}`;
        img.title = `${valuToShow.title}`;
        let machineNum = valuToShow.sign;
        let lastImgUrl = `${valuToShow.img}`;
        sessionStorage.setItem('img', lastImgUrl);
        switch (machineNum) {
            case 'scissor':
                {
                    machineS++;
                    machine.textContent = `${machineS}`;
                    sessionStorage.setItem('MachineScore', `${machineS}`);
                }
                break;
            case 'rock':
                {
                    userS++;
                    user.textContent = `${userS}`;
                    sessionStorage.setItem('UserScore', `${userS}`);
                }
                break;
            default: {
                // alert("It's a tie");
            }
        }
        loader.style.display = 'none';
    }, 500);
});
//Displaying things on clicking the scissor
scissor.addEventListener('click', () => {
    img.style.display = 'none';
    loader.style.display = 'block';
    clearTimeout(timer);
    timer = setTimeout(() => {
        img.style.display = 'block';
        let valuToShow = play();
        img.src = `${valuToShow.img}`;
        img.title = `${valuToShow.title}`;
        let machineNum = valuToShow.sign;
        let lastImgUrl = `${valuToShow.img}`;
        sessionStorage.setItem('img', lastImgUrl);
        switch (machineNum) {
            case 'rock':
                {
                    machineS++;
                    machine.textContent = `${machineS}`;
                    sessionStorage.setItem('MachineScore', `${machineS}`);
                }
                break;
            case 'paper':
                {
                    userS++;
                    user.textContent = `${userS}`;
                    sessionStorage.setItem('UserScore', `${userS}`);
                }
                break;
            default: {
                // alert("It's a tie");
            }
        }
        loader.style.display = 'none';
    }, 500);
});
