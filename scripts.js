const closeFace = document.querySelector('.closed')
const openFace = document.querySelector('.open');


//Add event listener

closeFace.addEventListener('click', () => {
    if(openFace.classList.contains('open')) {
        openFace.classList.add('active');
        closeFace.classList.remove('active');
    }
})


openFace.addEventListener('click', () => {
    if(closeFace.classList.contains('closed')) {
        closeFace.classList.add('active');
        openFace.classList.remove('active');
    }
});