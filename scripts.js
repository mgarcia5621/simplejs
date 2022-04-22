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
    if(closeFace.classList.contains('close')) {
        closeFace.classList.add('active');
        openFace.classList.remove('active');
    }
});

function monkeyToggle() {
    let toggle = document.getElementById("active");
    toggle.classList.toggle("close");
  }