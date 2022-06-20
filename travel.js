// for checking
console.log("hi there")
// heading
let searchbtn = document.querySelector("#search-btn")
let searchbar = document.querySelector(".search-bar-container")

// login container
let formbtn = document.querySelector("#login-btn")
let loginfrom = document.querySelector(".login-form-container")
let formclose = document.querySelector("#form-close")

// menu bar for media query
let menu= document.querySelector("#menu-bar")
let navbar = document.querySelector(".navbar")

// for videos
let videoBtn = document.querySelectorAll(".vid-btn")


// /////////////////
window.onscroll =()=>{
    searchbtn.classList.remove("fa-times")
    searchbar.classList.remove("active")
    menu.classList.remove("fa-times")
    navbar.classList.remove("active")
}
// heading
searchbtn.addEventListener("click", ()=>{
    searchbtn.classList.toggle("fa-times")
    searchbar.classList.toggle("active")
})

// login container
formbtn.addEventListener("click", ()=>{
    loginfrom.classList.add("active")
})

formclose.addEventListener("click", ()=>{
    loginfrom.classList.remove("active")
})

// menu bar for media query
menu.addEventListener("click", ()=>{
    navbar.classList.toggle("fa-times")
    navbar.classList.toggle("active")
})

// for videos
 
videoBtn.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        document.querySelector(".controls .active").classList.remove("active")
        btn.classList.add("active")
let src= btn.getAttribute("data-src")
document.querySelector("#video-slider").src= src

    })
})



console.log("in the end")