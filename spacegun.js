let playGround = document.getElementById('playGround');

let clicks = document.getElementById('clicks')

let aciertos = document.getElementById('aciertos')

let errores = document.getElementById('errores')

playGround.addEventListener('click',renderDianas);

let clicksCounter = -1

let aciertosCounter = 0;


function renderDianas() {

    clicksCounter++

    let x;

    let y;

    x = Math.random()*950;

    y = Math.random()*450;

    playGround.innerHTML='',

    playGround.innerHTML=`<img id='diana' src="./images/diana.png" style="position:absolute;top:${y}px;left:${x}px"></img>`;

    let diana = document.getElementById('diana');
    
    diana.addEventListener('click',()=>aciertosCounter++)

    let erroresCounter=clicksCounter-aciertosCounter;

    clicks.innerText='CLICKS: '+clicksCounter;
    aciertos.innerText='ACIERTOS: '+aciertosCounter;
    errores.innerText='ERRORES: '+erroresCounter;


}

renderDianas()