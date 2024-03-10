var button = document.getElementById("article4__btn1");
button.addEventListener("click", function() {
    window.open("https://homailali.github.io/Usability-hub/", "_blank");
});

var button = document.getElementById("article4__btn2");
button.addEventListener("click", function() {
    window.open("https://homailali.github.io/Ecommerce-Store/", "_blank");
});
var button = document.getElementById("article1__button");
button.addEventListener("click", function() {
    window.open("https://discord.gg/3KJKQpHYvE", "_blank");
});


window.addEventListener('scroll', (e)=>{
    if(window.scrollY >= 720){
        document.querySelector('[data-html]').classList.add('html__progress');
        document.querySelector('[data-css]').classList.add('css__progress');
        document.querySelector('[data-javaScript]').classList.add('javascript__progress')
    }
})

