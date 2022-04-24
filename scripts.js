const closeFace = document.querySelector('.closed')
const openFace = document.querySelector('.open');


//Add event listener

closeFace.addEventListener('click', () => {
    if(openFace.classList.contains('open')) {
        openFace.classList.add('active');
        closeFace.classList.remove('active');
        closeFace.classList.add('notActive');
        openFace.classList.remove('notActive');
    }
})


openFace.addEventListener('click', () => {
    if(closeFace.classList.contains('closed')) {
        closeFace.classList.add('active');
        openFace.classList.remove('active');
        openFace.classList.add('notActive');
        closeFace.classList.remove('notActive');
    }
});


const monkey = document.querySelector('#monkey');


monkey.addEventListener('mouseenter', () => {
    if(!monkey.classList.contains('hover')) {
        monkey.classList.add('hover');
    }
})

monkey.addEventListener('mouseleave', () => {
    if(monkey.classList.contains('hover')) {
        monkey.classList.remove('hover');
    }
})

const monkeyopen = document.querySelector('#monkeyopen');


monkeyopen.addEventListener('mouseenter', () => {
    if(!monkeyopen.classList.contains('hover')) {
        monkeyopen.classList.add('hover');
    }
})

monkeyopen.addEventListener('mouseleave', () => {
    if(monkeyopen.classList.contains('hover')) {
        monkeyopen.classList.remove('hover');
    }
})