const arrow_right = document.querySelector('.arrow-right');
const arrow_left = document.querySelector('.arrow-left');
const img = document.querySelectorAll('.img-slide');
const hamberger = document.querySelector('.hamberger-menu');
const mobile = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const arrow_up = document.querySelector('.arrow-icon');
const about_img = document.querySelector('#about_img');
const tab_pill = document.querySelectorAll('.tab-btn');
const div_panel = document.querySelectorAll('.div-panel');
const counters = document.querySelectorAll('.counters');
const footer_bottom = document.querySelector('.footer-bottom');
const gallery_img = document.querySelectorAll('.gallery-item');
const light_img = document.querySelectorAll('.gallery-item .gallery-item-inner img');
const gallery_light = document.querySelector('.gallery .gallery_light');
const light_close = document.querySelector('.gallery .close');
const previmg_light = document.querySelector('.gallery .gallery_light .arrowimage .fa-arrow-left');
const nextimg_light = document.querySelector('.gallery .gallery_light .arrowimage .fa-arrow-right');
const lightbox_image = document.querySelector('.gallery #lightboxImage');
const gallery_shoe = document.querySelectorAll('.gallery-item.shoe');
const gallery_headphone = document.querySelectorAll('.gallery-item.headphone');
const gallery_camera = document.querySelectorAll('.gallery-item.camera');
const gallery_video = document.querySelectorAll('.gallery-item.video');
const gallery_event = document.querySelector('.gallery .gallery-filter #event');
const gallery_exhib = document.querySelector('.gallery #exhibition');
const gallery_merchan = document.querySelector('.gallery #merchandising');
const pagin_div = document.querySelector('.gallery .pagination');
const prev_img = document.querySelector('.gallery .pagination .prev');
const next_img = document.querySelector('.gallery .pagination .next');
const page = document.querySelector('.pagination .page-num');
const body = document.querySelector('body');
const ul = document.querySelector('header .menu ul');
const head_a = ul.querySelectorAll('li a')
const span_dot = document.querySelectorAll('.slider .carousel-indicator span');
let about_us = ul.querySelectorAll('li')[1];
let services = ul.querySelectorAll('li')[2];
let portfolio = ul.querySelectorAll('li')[3];
let contact_us = ul.querySelectorAll('li')[4];
const slides = document.querySelector('.slider-content').children;
const indicatorimage = document.querySelectorAll('.slider-indicator img');
const leftarrow = document.querySelector('.slider-indicator .arrow-left');
const rightarrow = document.querySelector('.slider-indicator .arrow-right');

const ulfooter = document.querySelector('footer .contact-div ul');
const apply = document.querySelector('footer .info-div button');
let footer_about = ulfooter.querySelectorAll('li')[1];
let footer_service = ulfooter.querySelectorAll('li')[2];
let footer_portfolio = ulfooter.querySelectorAll('li')[3];
let footer_contact = ulfooter.querySelectorAll('li')[4];
let want_service = document.querySelector('.dummy .service-div button');
let maxItem = 9;
let index1 = 1;
let speed = 1000;
let index = 0;
const auto = true; // Auto scroll
const auto2 = true; // Auto scroll
const intervalTime = 8000;
let slideInterval;
let index2 = 1;
let index3 = 0;
let maxItem2 = 3;
let pagination2 = Math.ceil(indicatorimage.length / maxItem2);

for (let i = 0; i < indicatorimage.length; i++) {
    indicatorimage[i].addEventListener('click', function () {
        for (let j = 0; j < indicatorimage.length; j++) {
            indicatorimage[j].classList.remove('active');
        }
        this.classList.add('active');
        index3++;
        let id = this.getAttribute('data-id');
        for (let j = 0; j < slides.length; j++) {
            slides[j].classList.remove('active');
        }
        slides[id].classList.add('active');
    })
}

leftarrow.addEventListener('click', () => {
    index2--;
    if (index2 == 0) {
        index2 = 2;
    }
    showUser();
    if (index3 == 0) {
        indicatorimage[0].classList.add('active');
        let id = indicatorimage[0].getAttribute('data-id');
        for (let j = 0; j < slides.length; j++) {
            slides[j].classList.remove('active');
        }
        slides[id].classList.add('active');
    }

})
rightarrow.addEventListener('click', () => {
    index2++;
    if (index2 > pagination2) {
        index2 = 1;
    }
    showUser();
    if (index3 == 0) {
        indicatorimage[3].classList.add('active');
        let id = indicatorimage[3].getAttribute('data-id');
        for (let j = 0; j < slides.length; j++) {
            slides[j].classList.remove('active');
        }
        slides[id].classList.add('active');
    }

})
function showUser() {
    for (let i = 0; i < indicatorimage.length; i++) {
        // console.log(indicatorimage);
        indicatorimage[i].classList.remove('show');
        indicatorimage[i].classList.add('hide');

        if (i >= (maxItem2 * index2) - maxItem2 && i < maxItem2 * index2) {
            indicatorimage[i].classList.remove('hide');
            indicatorimage[i].classList.add('show');
        }
    }
}
if (auto2) {
    index2++;
    if (index2 > pagination2) {
        index2 = 1;
    }
    showUser();
}
window.addEventListener('load', showUser);

head_a.forEach((val) => {
    val.addEventListener('click', (e) => {
        for (let i = 0; i < head_a.length; i++) {
            head_a[i].classList.remove('active');
        }
        if (!e.target.classList.contains('active')) {
            val.classList.add('active');
        }
        else {
            val.classList.remove('active');
        }
    })
})
$(document).ready(function () {
    $('.owl-carousel').owlCarousel(
        {
            autoplay: true,
            autoplayHoverPause: true,
            items: 4,
            nav: false,
            dots: true,
            loop: true,
            responsive:
            {
                0:
                {
                    items: 1,
                    dots: false
                },
                485:
                {
                    items: 2,
                    dots: false
                },
                728:
                {
                    items: 3,
                    dots: false
                },
                960:
                {
                    items: 4,
                    dots: false
                },
                1200:
                {
                    items: 5,
                    dots: false
                },
            }
        });
})
$(document).ready(function () {
    $('.about--anime1').waypoint(function (direction) {
        $('.about--anime1').addClass('animated slideInLeft');
    },
        {
            offset: '550px'
        })
    $('.about--anime2').waypoint(function (direction) {
        $('.about--anime2').addClass('animated zoomIn');
    },
        {
            offset: '550px'
        })

    $('.service-anime1').waypoint(function (direction) {
        $('.service-anime1').addClass('animated fadeInLeft');
    },
        {
            offset: '500px'
        })

    $('.service-anime2').waypoint(function (direction) {
        $('.service-anime2').addClass('animated fadeInDown');
    },
        {
            offset: '500px'
        })

    $('.service-anime3').waypoint(function (direction) {
        $('.service-anime3').addClass('animated fadeInRight');
    },
        {
            offset: '500px'
        })
    $('.service-anime4').waypoint(function (direction) {
        $('.service-anime4').addClass('animated zoomIn');
    },
        {
            offset: '700px'
        })

    $('.portfolio-anime1').waypoint(function (direction) {
        $('.portfolio-anime1').addClass('animated fadeInUp');
    },
        {
            offset: '500px'
        })
})
for (let i = 0; i < span_dot.length; i++) {
    span_dot[i].addEventListener('click', () => {
        if (auto) {
            index = i;
            clearInterval(slideInterval);
            slideInterval = setInterval(nextslide, intervalTime);
        }
        img.forEach((val) => {
            val.classList.remove('active');
        })
        img[i].classList.add('active');

        span_dot.forEach((value) => {
            value.classList.remove('active');
        })
        span_dot[i].classList.add('active');
    })
}

about_us.addEventListener('click', (event) => {
    if (this.innerWidth < 991) {
        window.scrollTo(
            {
                top: 515,
                left: 0,
            });
    }
    else {
        window.scrollTo(
            {
                top: 530,
                left: 0,
            });
    }
})

services.addEventListener('click', (event) => {
    if (this.innerWidth < 991) {
        window.scrollTo(
            {
                top: 1410,
                left: 0,
            });
    }
    else {
        window.scrollTo(
            {
                top: 1170,
                left: 0,
            });
    }

})
portfolio.addEventListener('click', () => {
    if (this.innerWidth < 991) {
        window.scrollTo(
            {
                top: 2690,
                left: 0,
            });
    }
    else {
        window.scrollTo(
            {
                top: 1800,
                left: 0,
            });
    }

})
contact_us.addEventListener('click', () => {
    if (this.innerWidth < 991) {
        window.scrollTo(
            {
                top: 7010,
                left: 0,
            });
    }
    else {
        window.scrollTo(
            {
                top: 4270,
                left: 0,
            });
    }

})
footer_about.addEventListener('click', () => {
    if (this.innerWidth < 991) {
        window.scrollTo(
            {
                top: 515,
                left: 0,
            });
    }
    else {
        window.scrollTo(
            {
                top: 530,
                left: 0,
            });
    }
})
footer_service.addEventListener('click', () => {
    if (this.innerWidth < 991) {
        window.scrollTo(
            {
                top: 1430,
                left: 0,
            });
    }
    else {
        window.scrollTo(
            {
                top: 1170,
                left: 0,
            });
    }
})
footer_portfolio.addEventListener('click', () => {
    if (this.innerWidth < 991) {
        window.scrollTo(
            {
                top: 2690,
                left: 0,
            });
    }
    else {
        window.scrollTo(
            {
                top: 1800,
                left: 0,
            });
    }
})
footer_contact.addEventListener('click', () => {
    if (this.innerWidth < 991) {
        window.scrollTo(
            {
                top: 7010,
                left: 0,
            });
    }
    else {
        window.scrollTo(
            {
                top: 4260,
                left: 0,
            });
    }
})
want_service.addEventListener('click', () => {
    if (this.innerWidth < 991) {
        window.scrollTo(
            {
                top: 7010,
                left: 0,
            });
    }
    else {
        window.scrollTo(
            {
                top: 4260,
                left: 0,
            });
    }
})
apply.addEventListener('click', () => {
    if (this.innerWidth < 991) {
        window.scrollTo(
            {
                top: 7010,
                left: 0,
            });
    }
    else {
        window.scrollTo(
            {
                top: 4260,
                left: 0,
            });
    }
})
for (let i = 0; i < light_img.length; i++) {
    light_img[i].addEventListener('click', () => {
        index2 = i;
        gallery_light.classList.add('show');
        body.style.overflow = 'hidden';
        let img_src = light_img[i].src;
        lightbox_image.src = img_src;
    })
}
light_close.addEventListener('click', () => {
    body.style.overflow = 'auto';
    gallery_light.classList.remove('show');
})
previmg_light.addEventListener('click', () => {
    if (index2 == 0) {
        index2 = light_img.length;
    }
    index2--;
    lightbox_image.classList.add('show2');
    lightbox_image.src = light_img[index2].src;
    setTimeout(() => {
        lightbox_image.classList.remove('show2');
    }, 500)
})
nextimg_light.addEventListener('click', () => {
    index2++;
    if (index2 == light_img.length) {
        index2 = 0;
    }
    lightbox_image.classList.add('show');
    lightbox_image.src = light_img[index2].src;
    setTimeout(() => {
        lightbox_image.classList.remove('show');
    }, 500)

})
window.addEventListener('click', (e) => {
    if (e.target == gallery_light) {
        body.style.overflow = 'auto';
        gallery_light.classList.remove('show');
    }
})
const pagination = Math.ceil(gallery_img.length / maxItem);

prev_img.addEventListener('click', () => {
    index1--;
    check();
    showItems();
});

next_img.addEventListener('click', () => {
    index1++;
    check();
    showItems();
});
function check() {
    if (index1 == pagination) {
        next_img.classList.add('disabled');
    }
    else {
        next_img.classList.remove('disabled');
    }
    if (index1 == 1) {
        prev_img.classList.add('disabled');
    }
    else {
        prev_img.classList.remove('disabled');
    }
}
function showItems() {
    for (let i = 0; i < gallery_img.length; i++) {
        gallery_img[i].classList.remove('show');
        gallery_img[i].classList.add('hide');

        if (i >= (maxItem * index1) - maxItem && i < maxItem * index1) {
            gallery_img[i].classList.remove('hide');
            gallery_img[i].classList.add('show');
        }
        page.innerHTML = index1;
    }
}
window.onload = function () {
    showItems();
    check();
}

gallery_event.addEventListener('click', () => {
    pagin_div.style.display = 'none';
})
gallery_exhib.addEventListener('click', () => {
    pagin_div.style.display = 'none';
})
gallery_merchan.addEventListener('click', () => {
    pagin_div.style.display = 'none';
})

window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 500);
})

window.addEventListener('scroll', () => {
    if (this.innerWidth < 991) {
        if (this.scrollY > 5100) {
            counterrun();
        }
    }
    else {
        if (this.scrollY > 2600) {
            counterrun();
        }
    }

})

function counterrun() {
    counters.forEach((counter) => {
        function updatecount() {
            let target = +counter.getAttribute('data-target');
            let count = +counter.innerHTML;
            let inc = target / speed;

            if (count < target) {
                counter.innerHTML = Math.ceil(count + inc);
                setTimeout(updatecount, 1);
            }
            else {
                counter.innerHTML = target;
            }
        }
        updatecount();
    })
}
for (let i = 0; i < tab_pill.length; i++) {
    tab_pill[i].addEventListener('click', (e) => {
        for (let j = 0; j < div_panel.length; j++) {
            div_panel[j].classList.remove('active');
        }
        if (!e.target.classList.contains('active')) {
            div_panel[i].classList.add('active');
        }
        //  else
        //  {
        // atag[i].classList.remove('active');
        //  }
    })
}
// Auto slide
if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextslide, intervalTime);
}
arrow_right.addEventListener('click', () => {
    nextslide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextslide, intervalTime);
    }
});
function nextslide() {
    index++;
    if (index == img.length) {
        index = 0;
    }
    img.forEach((val) => {
        val.classList.remove('active');
    })
    img[index].classList.add('active');

    for (let i = 0; i < span_dot.length; i++) {
        span_dot[i].classList.remove('active');
    }
    span_dot[index].classList.add('active');
}
arrow_left.addEventListener('click', () => {
    prevslide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextslide, intervalTime);
    }
});
function prevslide() {
    if (index == 0) {
        index = img.length;
    }
    index--;
    img.forEach((val) => {
        val.classList.remove('active');
    })
    img[index].classList.add('active');

    for (let i = 0; i < span_dot.length; i++) {
        span_dot[i].classList.remove('active');
    }
    span_dot[index].classList.add('active');
}
hamberger.addEventListener('click', (event) => {
    toggle();
    if (mobile.classList.contains('active')) {
        setTimeout(() => {
            toggle();
        }, 1800)
    }
})
overlay.addEventListener('click', () => {
    toggle();
})

const filterContainer = document.querySelector(".gallery-filter");
galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item")) {
        // deactivate existing active 'filter-item'
        filterContainer.querySelector(".active").classList.remove("active");
        // activate new 'filter-item'
        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter");
        galleryItems.forEach((item) => {
            if (item.classList.contains(filterValue) || filterValue === 'all') {
                item.classList.remove("hide");
                item.classList.add("show");
            }
            else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
        if (filterValue === "all") {
            pagin_div.style.display = 'block';
            index1 = 1;
            showItems();
        }
    }
});
window.onresize = function () {
    if (this.innerWidth > 868) {
        // about_img.src="images/"+22+".jpg";	        		
        if (mobile.classList.contains('active')) {
            toggle();
        }
    }
    // if(this.innerWidth<868)
    // {
    // 	about_img.src="images/"+15+".jpg";
    // }

}
function toggle() {
    mobile.classList.toggle('active');
    overlay.classList.toggle('active');
}

window.onscroll = function (event) {
    if (this.pageYOffset > 1000) {
        arrow_up.classList.add('active');
        footer_bottom.classList.add('show');
    }
    else {
        arrow_up.classList.remove('active');
        footer_bottom.classList.remove('show');
    }
    if (this.pageYOffset > 4000) {
        footer_bottom.classList.add('show');
    }
    else {
        footer_bottom.classList.remove('show');
    }
}