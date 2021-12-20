var home = document.getElementById('home');
var main_website = document.getElementById('iit_website');
var team = document.getElementById('team');
var about_us = document.getElementById('View-next');

home.addEventListener('click', function () {
    window.location.href = "PaAc-Portfolio page.html";
})

main_website.addEventListener('click', function () {
    location.href = "https://new.iitr.ac.in/Main/pages/_en_Indian_Institute_of_Technology_Roorkee__en_.html";
})

team.addEventListener('click', function () {
    location.href = "#Team_page";
})

about_us.addEventListener('click', function () {
    location.href = "#About_page";
})