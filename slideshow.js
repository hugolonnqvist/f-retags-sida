index = 0;

slideshow()

function slideshow () {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot")

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    index++;
    if (index > slides.length) {
        index = 1;
    }
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }
    slides[index-1].style.display = "block";
    dots[index-1].className += " active";
    setTimeout(slideshow, 3000) 
}