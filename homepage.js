
window.onload = function () { 
    var mq786 = window.matchMedia("(max-width: 786px)");
    mq786.addListener(media786); 
    media786(mq786);
}

//following involves the application of the search-bar button at media query 786px
function media786(mq) {
    if(mq.matches) {
        dropDownSearch();
        document.getElementById("dp-btn").onclick = dropDownSearch;
        //document.getElementById("dropdown-btn").addEventListener("click", dropDownSearch);
    }
    else {
        document.getElementById("dp-search").style.display = "inline-block";
    }
}

function dropDownSearch() {
    var searchbar = document.getElementById("dp-search");
    if(searchbar.style.display === "none") {
        searchbar.style.display = "block";
    }
    else {
        searchbar.style.display = "none";
    }

}
    

//following involves the display of images in newsfeed
//window.onload = function(){
var slideIndex = 1;
var prevSlideIndex = slideIndex;
onloadSlide(slideIndex);


function plusSlide(x) {
    prevSlideIndex = slideIndex;
    showSlide(slideIndex += x);
}

function currentSlide(x) {
    prevSlideIndex = slideIndex;
    showSlide(slideIndex = x);
}

function onloadSlide(x) {
    var i = 0;
    var slides = document.getElementsByClassName("news-slide");
    for(i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[x-1].style.display = "block";
}

function showSlide(x) {
    var i = 0;
    var slides = document.getElementsByClassName("news-slide");
    var images = document.getElementsByClassName("news-image");

    if(x > slides.length) {
        slideIndex = 1;
    }
    if(x < 1) {
        slideIndex = slides.length;
    }

    swipeLeft(prevSlideIndex-1);

    slides[prevSlideIndex-1].style.display = "none";

    if(images[slideIndex-1].style.width == "0px") {
        images[slideIndex-1].style.width = "1024px";
    }
    slides[slideIndex-1].style.display = "block";
}
/*
var slideIndex = 1;
showSlide(slideIndex);

function plusSlide(x) {
    showSlide(slideIndex += x);
}

function currentSlide(x) {
    showSlide(slideIndex = x);
}

function showSlide(x) {
    var i = 0;
    var slides = document.getElementsByClassName("news-slide");
    var dots = document.getElementsByClassName("news-dot");

        if(x > slides.length) {
            slideIndex = 1;
        }
        if(x < 1) {
            slideIndex = slides.length;
        }

    //thinking of way to assign direction for when direction is 'empty'. the functions needs to know the slide before so
    //the functions parameters may need to include a variable that knows the number position of the last slide,
    //however since i will not always need to have that for when the direction is already known, i will need to overload
    //the function. function overloading is not allowed in js though, so the function could possibly pass an object containing
    //the current slide and last slide position in order to mimic an overloading function



    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        //slides[i].style.visibility = "hidden";
    }
    for(i = 0; i < dots.length; i++) {  
        dots[i].className = dots[i].className.replace(" current-dot", "");
    }

    //slides[slideIndex-1].style.visibility = "visible";
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " current-dot";
}
*/

//following involves functions for the animation of the news feed transition betweens slides
function swipeLeft(n) {
    var x = document.getElementsByClassName("news-image");
    var y = document.getElementsByClassName("news-slide");
    /*if(y[n].style.display === "block") {
        alert("display is in block #1");
    }*/
    x[n].style.width = "0px";

    /*if(y[n].style.display === "block") {
        alert("display is in block #2");
    }*/
}

function swipeRight(n) {
    var x = document.getElementsByClassName("news-image")
    x[n].style.width = "1px";
    //x[n].style.marginLeft = "1024px";
}