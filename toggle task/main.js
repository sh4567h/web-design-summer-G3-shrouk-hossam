let btn = document.getElementById('btn')
let img = document.getElementById('app-img')
let nextImg = document.getElementById('dis-app-img')

btn.addEventListener("click", function () {

    img.classList.toggle("hidden");
    nextImg.classList.toggle("hidden");

});