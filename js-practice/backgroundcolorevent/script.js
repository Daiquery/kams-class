var cool = document.body;

cool.addEventListener('keydown', (key) => {
    if (key.code === 'KeyW'){
        cool.style.backgroundColor = 'blue';
    } else if (key.code === 'KeyA'){
        cool.style.backgroundColor = 'red';
    } else if (key.code === 'KeyS'){
        cool.style.backgroundColor = 'yellow';
    } else if (key.code === 'KeyD'){
        cool.style.backgroundColor = 'purple';
    }
})