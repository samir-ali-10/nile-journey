let prevBtn = document.querySelector(".prev"),
    nextBtn = document.querySelector(".next"),
    imgs = document.querySelectorAll(".slider img"),
    imageLink = ["discover_1.jpeg", "discover_2.jpeg", "discover_3.jpeg", "discover_4.jpeg", "discover_5.jpeg"],
    root = "img/",
    counter = 1;


nextBtn.onclick = function() {
    for (let index = 0; index < imgs.length; index++) {
        if(counter === imageLink.length) {
            counter = 1;
        }
        imgs[index].setAttribute("src", root + imageLink[counter]);
        counter++;
    }
}



prevBtn.onclick = function() {
    for (let index = 0; index < imgs.length; index++) {
        if(counter === 0) {
            counter = imageLink.length - 1;
        }
        imgs[index].setAttribute("src", root + imageLink[counter]);
        counter--;
    }
}