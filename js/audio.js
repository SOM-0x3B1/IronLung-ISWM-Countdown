

const abg = new Audio('media/bg.mp3');
const abgSub = new Audio('media/bg-sub.mp3');
const aMusic = new Audio('media/music.mp3');

const aconnect = new Audio('media/connect.mp3');
const astartup = new Audio('media/startup.mp3');
const aupdate = new Audio('media/update.mp3');
const alogin = new Audio('media/login.mp3');
const aend = new Audio('media/end.mp3');
const ashow = new Audio('media/show.mp3');
const aclose = new Audio('media/close.mp3');

abg.loop = true;
abgSub.loop = true;
aMusic.loop = true;

const audios = [aconnect, abg, aMusic, abgSub, astartup, aupdate, alogin, aend, ashow, aclose];

function setVolume(value) {
    for (let i = 0; i < audios.length; i++)
        audios[i].volume = value / 100;
}


var musicOn = true;
var musicToggleElement = document.getElementById('musicToggle');


function toggleMusic(){
    musicOn = !musicOn;
    if(musicOn){
        aMusic.play();
        musicToggleElement.innerText = 'MUSIC OFF';
    }
    else{        
        aMusic.pause();
        musicToggleElement.innerText = 'MUSIC ON';
    }
}