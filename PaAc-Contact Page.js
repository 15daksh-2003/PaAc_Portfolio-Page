var home = document.getElementById('home');
var main_website = document.getElementById('iit_website');
var team = document.getElementById('team');
var contact = document.getElementById('contact');
var submit = document.getElementById('submit');

home.addEventListener('click', function () {
    window.location.href = "PaAc-Portfolio page.html";
})

main_website.addEventListener('click', function () {
    location.href = "https://new.iitr.ac.in/Main/pages/_en_Indian_Institute_of_Technology_Roorkee__en_.html";
})

team.addEventListener('click', function () {
    location.href = "PaAc-Portfolio page.html#Team_page";
})

contact.addEventListener('click', function () {
    location.href = "PaAc-Contact Page.html";
})

submit.addEventListener('click', function () {
    alert("Submit button clicked");
})