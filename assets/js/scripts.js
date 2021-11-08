/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Check if navToggle is present and add show-menu class to open navigation menu */
if (navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Check if navClose is present and remove show-menu class to close navigation menu */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When any nav__link is clicked, it removes show-menu class to close navigation menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
      skillsHeader = document.querySelectorAll(".skills__header")

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = "skills__content skills__close"
    }
    if(itemClass === "skills__content skills__close"){
        this.parentNode.className = "skills__content skills__open"
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener("click", toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

/*==================== SEND MESSAGE ====================*/
const EmailJSUserID = "user_DoOnYBoOadoZVbGED61tp";
const EmailJSAccessToken = "cfda4527438f42ac589a4a113c1eeb6d";

function sendMail(contactForm) {
    emailjs.init(EmailJSUserID);
    emailjs.send("gmail", "temp_1", {
            "from_name": contactForm.contact_name.value,
            "from_email": contactForm.contact_email.value,
            "project_request": contactForm.contact_request.value
        })
        .then(
            function () {
                alert("Email sent successfully");
                document.querySelector("#contactForm").reset();
            },
            function (error) {
                alert("There was an error, please try again!")
                console.log("FAILED", error);
            }
        );

    return false; // To block from loading a new page
}

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== DARK LIGHT THEME ====================*/

let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.getElementById('theme-button');

// check if dark mode == true
// if true then switch off
// if false them switch on

const enableDarkMode = () => {
    // 1. add class dark-theme to body
    document.body.classList.add('dark-theme');
    darkModeToggle.classList.remove('uil-moon');
    darkModeToggle.classList.add('uil-sun')
    // 2. update darkMode in localStorage
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
    // 1. remove class dark-theme from body
    document.body.classList.remove('dark-theme');
    darkModeToggle.classList.remove('uil-sun');
    darkModeToggle.classList.add('uil-moon')

    // 2. update darkMode in localStorage
    localStorage.setItem('darkMode', null);
};

if (darkMode === 'enabled') {
    enableDarkMode();
}

// dark mode toggle button
darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else{
        disableDarkMode();
    }
});