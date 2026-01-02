var redMode = false;
var colorModeButtonElement = document.getElementById('colorToggle');

function toggleColor() {  
    redMode = !redMode;
    if(redMode){
        document.documentElement.style.setProperty('--foreground01', 'rgb(204, 48, 0)');
        colorModeButtonElement.innerText = 'GREEN  MODE';
    }
    else{
        document.documentElement.style.setProperty('--foreground01', 'rgb(96, 167, 102)');
        colorModeButtonElement.innerText = 'RED  MODE';
    }
} 