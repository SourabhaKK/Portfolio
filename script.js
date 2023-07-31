// /*=======Menu Icon Navbar=======*/
// let menuIcon=document.querySelector("#menu-icon");
// let navbar=document.querySelector(".navbar");

// menuIcon.onclick=()=>{
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };

/*=======Page Animations=======*/
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000, 
    delay:200
});

ScrollReveal().reveal('.home-content, .heading',  { origin: 'top' });
ScrollReveal().reveal('.home-img img, .skills-container, .project-box, contact form',  { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1 , .about-img img',  { origin: 'left' });
ScrollReveal().reveal('.home-content h3 , home-content p, .about-content',  { origin: 'right' });

