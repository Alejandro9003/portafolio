const navLink = document.querySelectorAll('.link');   

function linkAction(){
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')*/
}
navLink.forEach(n => n.addEventListener('click', linkAction));
