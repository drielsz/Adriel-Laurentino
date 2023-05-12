function setTheme(themeName) {
    localStorage.setItem('theme', themeName)
    document.documentElement.className = themeName;
}


const toggleThemeButton = document.querySelector("body > div.wrapper > header > nav > div.nav-links > ul > li:nth-child(4) > a > svg")

toggleThemeButton.addEventListener('click', (event) => {
    shortToggle = toggleThemeButton.style;
    shortToggle.transform = "translate(0, 0) rotate(360deg)";

    setTimeout(() => {
        shortToggle.transform = "translate(0,0) rotate(0deg)";
    }, "800")
    
    toggleThemeButton.addEventListener('mouseleave', (event) => {
        shortToggle.transform = "translate(0,0) rotate(0deg)";
    })

    toggleThemeButton.addEventListener('mouseover', (event) => {
        shortToggle.transform = "translate(0,0) rotate(-360deg)"
    })
})


function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark'){
        setTheme('theme-light')
    } else {
        setTheme('theme-dark')
    }
}

(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark')
    } else {
        setTheme('theme-light')
    }
})();


window.addEventListener("load", (event) => {
   $(".loader-wrapper").fadeOut("slow");
})

const btnHamburguer = document.querySelector(".btn-hamburguer")
const menuBar = document.querySelector('.menu-bar')

window.addEventListener("scroll", (event) => {
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    
    const appearMoment = 0.05977165883143049;
    if (scrollPercentage >= appearMoment) {
        btnHamburguer.style.opacity = "1";
        btnHamburguer.style.scale = "1";
    }
    else {
        btnHamburguer.style.opacity = 0;
        btnHamburguer.style.scale = 0;
    }

})

const menuIcon = document.querySelector('.menu-icon');
const html = document.querySelector('html');

btnHamburguer.addEventListener("click", (event) => {
    menuBar.classList.toggle("menu-bar-right")
    menuIcon.classList.toggle('change')
    html.classList.toggle("stop-scrolling")
});

const setVisible = (elementOrSelector, visible) =>
  (typeof elementOrSelector === 'string'
    ? document.querySelector(elementOrSelector)
    : elementOrSelector
  ).style.display = visible ? 'block' : 'none';

setVisible('.wrapper', false);
setVisible('.loading-container', true);


let loadScreen = document.querySelector('.loading-screen ')

let path = document.querySelector("body > div > div > div.container-words > svg > path:nth-child(14)")
let loadscreen = document.querySelector('.loading-screen')
let roundedWrapBottom = document.querySelector('.rounded-div-wrap.bottom')

path.addEventListener("animationend", (event) => {
  roundedWrapBottom.classList.add("animationHeightRounded");
  loadScreen.classList.add("animationLoadScreen");

  let animatLoadS = document.querySelector(".animationHeightRounded");
  animatLoadS.addEventListener("animationend", (event) => {
    setVisible('.wrapper', true);
    setVisible('.loading-container', false);
  })

})
