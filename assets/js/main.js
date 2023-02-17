
$(document).ready(function () {

    const year = $('#year');
    const mobileSidenav = $('#mobileSidenav');
    const closeNav = $('#closeNav');
    const contactForm = $("#contactForm");

    
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

    // Portfoli Filter
    $('.category-button').on('click', function() {
      const category = $(this).data('category');
      if (category === 'all') {
        $('.portfolio-item').show();
      } else {
        $('.portfolio-item').filter('[data-category="' + category + '"]').show();
        $('.portfolio-item').not('[data-category="' + category + '"]').hide();
      }
    });

    // contact form validation 
  
    contactForm.submit(function(event) {
      event.preventDefault();
      const valide = validateForm();
      const name = $('#name').val().trim();
      const email = $('#email').val().trim();
      const message = $('#message').val().trim();
      if(valide){
        
          alert(`Name: ${name} \nEmail: ${email} \nMessage: ${message}`)
      }

    });

function validateForm() {
  const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const message = $('#message').val().trim();

  const nameError = $('#nameError');
  const emailError = $('#emailError');
  const messageError = $('#messageError');
  // Name validation
  if (name === '') {
    nameError.text('Please enter your name.')
    return false;
  }else{
    nameError.text('')
  }
  
  // Email validation
  if (email === '') {   
    emailError.text('Please enter your email.')
    return false;
  } else if (!isValidEmail(email)) {
      emailError.text('Please enter a valid email address.')
    return false;
  }else{
    emailError.text('')
  }
  
  // Message validation
  if (message === '') {  
    messageError.text('Please enter your message.')
    return false;
  }else{
    messageError.text('')
  }
  
  return true;
}

function isValidEmail(email) {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
}


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
