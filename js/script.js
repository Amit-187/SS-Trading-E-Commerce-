(function ($) {

  "use strict";

  var initPreloader = function () {
    $(document).ready(function ($) {
      var Body = $('body');
      Body.addClass('preloader-site');
    });
    $(window).load(function () {
      $('.preloader-wrapper').fadeOut();
      $('body').removeClass('preloader-site');
    });
  }

  // init Chocolat light box
  var initChocolat = function () {
    Chocolat(document.querySelectorAll('.image-link'), {
      imageSize: 'contain',
      loop: true,
    })
  }

  var initSwiper = function () {

    var swiper = new Swiper(".main-swiper", {
      speed: 500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var category_swiper = new Swiper(".category-carousel", {
      slidesPerView: 6,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".category-carousel-next",
        prevEl: ".category-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 6,
        },
      }
    });

    var brand_swiper = new Swiper(".brand-carousel", {
      slidesPerView: 4,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".brand-carousel-next",
        prevEl: ".brand-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        1500: {
          slidesPerView: 4,
        },
      }
    });

    var products_swiper = new Swiper(".products-carousel", {
      slidesPerView: 5,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".products-carousel-next",
        prevEl: ".products-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 6,
        },
      }
    });
  }

  var initProductQty = function () {

    $('.product-qty').each(function () {

      var $el_product = $(this);
      var quantity = 0;

      $el_product.find('.quantity-right-plus').click(function (e) {
        e.preventDefault();
        var quantity = parseInt($el_product.find('#quantity').val());
        $el_product.find('#quantity').val(quantity + 1);
      });

      $el_product.find('.quantity-left-minus').click(function (e) {
        e.preventDefault();
        var quantity = parseInt($el_product.find('#quantity').val());
        if (quantity > 0) {
          $el_product.find('#quantity').val(quantity - 1);
        }
      });

    });

  }

  // init jarallax parallax
  var initJarallax = function () {
    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
      keepImg: true,
    });
  }

  // document ready
  $(document).ready(function () {

    initPreloader();
    initSwiper();
    initProductQty();
    initJarallax();
    initChocolat();

  }); // End of a document

})(jQuery);

//Custom Javascript

// const mobileInput = document.getElementById("mobile");

// mobileInput.addEventListener("input", () => {
//   mobileInput.value = mobileInput.value.replace(/\D/g, '').slice(0, 10);
// });


//Search functionality - Product List page

//Header

async function loadHTML(id, file) {
  try {
    let response = await fetch(file);     // fetch the file (header.html/footer.html)
    if (!response.ok) throw new Error("Could not load " + file);

    let data = await response.text();     // get file content as text
    document.getElementById(id).innerHTML = data;  // insert into placeholder
  } catch (error) {
    console.error(error);
  }
}

// Load header & footer
loadHTML("header", "header.html");
loadHTML("footer", "footer.html");


//Whatsapp contact details
function sendWhatsApp() {
  var contactInput = document.getElementById("contact");
  var messageInput = document.getElementById("message");

  var contact = contactInput.value;
  var message = messageInput.value;

  var phoneNumber = "919773875119";

  var fullMessage = 
  `Hello SS Traders,\nKindly call me back or email me at ${contact}.\nI am interested in ${message}.`;  

  var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(fullMessage);

  window.open(url, '_blank');

  // ✅ Clear the input fields
  contactInput.value = "";
  messageInput.value = "";
}


//Whatsapp detail message

function ProductInfoWApps(prodTitle) {
  
  let title = prodTitle.querySelector("h5");
  console.log(title.innerHTML);

  var phoneNumber = "919773875119";

  var fullMessage = `Hi, I’m interested in your ${title.innerHTML}.\nCan you please send me more details about pricing and availability?  `;

  var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(fullMessage);
  window.open(url, '_blank');
}