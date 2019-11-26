// enable slider/swiper
var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    loopedSlides: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

//enable education story interactive unit
var coll = document.getElementsByClassName("collapsible-unit");
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].onclick = function () {
        event.stopPropagation()
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display == "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    };
}

//enable swiper title interactivity
var base = document.querySelector('.projects');
base.onclick = function (e) {
    var togglerMobile = document.querySelector(".swiper-slide-active .mobile-collapsible");
    if (e.target == togglerMobile) {
        togglerMobile.classList.toggle("active");
        var neighbor = togglerMobile.nextElementSibling;
        if (neighbor.style.display === "block") {
            neighbor.style.display = "none";
            togglerMobile.textContent = 'show description'
        } else {
            neighbor.style.display = "block";
            togglerMobile.textContent = 'hide description'
        }
    }
}

//enable correct resizing from swiper to slider
window.onresize = function () {
    if ((window.innerWidth > 560) && document.querySelector('.swiper-slide-active  .mobile-content').style.display == "block") {
        document.querySelector('.swiper-slide-active  .mobile-content').style.display = "none" 
        document.querySelector(".swiper-slide-active .mobile-collapsible").textContent = 'show description';
    }
}