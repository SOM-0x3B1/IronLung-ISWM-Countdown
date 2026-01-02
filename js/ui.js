function toggleFullScreen() {  
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
        if (document.documentElement.requestFullscreen)
            document.documentElement.requestFullscreen();
        else if (document.documentElement.mozRequestFullScreen)
            document.documentElement.mozRequestFullScreen();
        else if (document.documentElement.webkitRequestFullscreen)
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);

    } else {
        if (document.cancelFullScreen)
            document.cancelFullScreen();
        else if (document.mozCancelFullScreen)
            document.mozCancelFullScreen();
        else if (document.webkitCancelFullScreen)
            document.webkitCancelFullScreen();
    }
}

addEventListener('fullscreenchange', (e) => {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement){
        document.getElementById('btmright').style.opacity = 1;
        document.getElementById('urls').style.opacity = 1;
    }
    else{
        document.getElementById('btmright').style.opacity = 0.2;
        document.getElementById('urls').style.opacity = 0.2;
    }
});


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