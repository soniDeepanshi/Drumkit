function playSound(e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key = "${e.keyCode}"]`);

    if (!audio) {
        return;
    }

    var x = e.keyCode;
    switch (x) {
        case 65:
            key.classList.add('playing-A');
            break;
        case 83:
            key.classList.add('playing-S');
            break;
        case 68:
            key.classList.add('playing-D');
            break;
        case 70:
            key.classList.add('playing-F');
            break;
        case 71:
            key.classList.add('playing-G');
            break;
        case 72:
            key.classList.add('playing-H');
            break;
        case 74:
            key.classList.add('playing-J');
            break;
        case 75:
            key.classList.add('playing-K');
            break;
        case 76:
            key.classList.add('playing-L');
            break;
        default:
            break;
    }

    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e){
    if(e.propertyName !== 'transform'){
        return;
    }
    e.target.classList.remove('playing-A');
    e.target.classList.remove('playing-S');
    e.target.classList.remove('playing-D');
    e.target.classList.remove('playing-F');
    e.target.classList.remove('playing-G');
    e.target.classList.remove('playing-H');
    e.target.classList.remove('playing-J');
    e.target.classList.remove('playing-K');
    e.target.classList.remove('playing-L');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
