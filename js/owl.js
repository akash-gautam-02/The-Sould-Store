// Carousel configuration for crousel-cards class
      $(".crousel-cards").owlCarousel({
        loop: false,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        nav: false,
        dots: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 5,
          },
        },
      });

      