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






});