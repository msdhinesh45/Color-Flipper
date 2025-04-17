const colorDisplay = document.getElementById("color-display");
const currentColor = document.getElementById("current-color");
const newColor = document.getElementById("new-color");


const hexValues = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

function getRandomHex(){
    const randomIndexPosiition = Math.floor(Math.random()*hexValues.length);
    const randomHexValue = hexValues[randomIndexPosiition];
    return randomHexValue;
}
function getRandomHexString(stringLength){
    let hexString = '';
    for(let i = 0; i<stringLength;i++){
        hexString += getRandomHex();
        console.log(hexString)
    }
    return hexString;
}

newColor.addEventListener("click",function(){
    const RandomHexString = '#'+getRandomHexString(6);
    document.body.style.setProperty('background-color',RandomHexString);
    currentColor.textContent= RandomHexString;
    colorDisplay.style.borderColor = RandomHexString;
});
