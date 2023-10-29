// Get the navigation bar element
let nav = document.querySelector(".navigation-wrap");

// Add a scroll event listener to the window
window.onscroll = function () {
    // Check if the scroll position is greater than 20 pixels from the top
    if (document.documentElement.scrollTop > 20) {
        // Add the "scroll-on" class to the navigation bar
        nav.classList.add("scroll-on");
    } else {
        // Remove the "scroll-on" class from the navigation bar
        nav.classList.remove("scroll-on");
    }
}
// Navbar hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    });
});