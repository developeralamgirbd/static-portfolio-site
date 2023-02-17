
$(document).ready(function () {

    const year = $('#year');
    const mobileSidenav = $('#mobileSidenav');
    const closeNav = $('#closeNav');

    
    // $(".navbar-toggler").click(function() {
    //     $(".navbar-collapse").slideToggle();
    // });

    $(".navbar-toggler").click(function() {
        mobileSidenav.css({
          'width': '80%',
          'border-right': '1px solid var(--yellow)'
        })
        $(this).hide()
    });

    closeNav.click(function() {
      mobileSidenav.css({
        'width': '0',
        'border-right': 'none'
      })
      $(".navbar-toggler").show();
  });

    // Smooth scrolling for links
    $('a[href^="#"]').on('click', function(event) {
        const target = $(this.getAttribute('href'));

        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });

    // Date add in copyritht
    const date = new Date();
    year.text(date.getFullYear());

    // Navbar scroll
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
          $('nav').addClass('shrink');
          $('nav').addClass('bg-box')
        } else {
          $('nav').removeClass('shrink');
          $('nav').removeClass('bg-box')
        }
      });

    // Testimornial js
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: {
        delay: 2000,
        },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });
})
