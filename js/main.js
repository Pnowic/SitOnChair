document.addEventListener("DOMContentLoaded", function(){

    //Submenus

    var mainList = document.querySelectorAll(".header-menu>li");

    for(var i = 0; i < mainList.length; i++) {
        mainList[i].addEventListener("mouseover", function(){
            var ul = this.querySelector(".header-submenu");
            if(ul){
                ul.style.display = "block";
            }
        });

        mainList[i].addEventListener("mouseout", function(){

            var ul = this.querySelector(".header-submenu");
            if(ul){
                ul.style.display = "none";
            }
        })
    }

    //Slider

    var prevPicture = document.querySelector('.nav-sign-left');
    var nextPicture = document.querySelector('.nav-sign-right');

    var slides = document.querySelectorAll('.slider li');
    var index = 0;

    console.log(slides);

    slides[index].classList.add("visible");

    nextPicture.addEventListener("click", function() {
        slides[index].classList.remove("visible");
        index++;
        index %= slides.length;
        slides[index].classList.add('visible');
    });

    prevPicture.addEventListener("click", function() {
        slides[index].classList.remove("visible");
        index--;
        index = index <0 ? slides.length -1 :index;
        slides[index].classList.add('visible');
    });






});