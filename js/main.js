$( document ).ready( function() {

  if ( $('.teams' ).length ) {
    $('.teams').slick({
      dots: false,
      arrows: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
            breakpoint: 1400,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
      ]
    });   
  }

  if ( $( '.products' ).length ) {
    $('.products').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      prevArrow: $(".product-prev"),
      nextArrow: $(".product-next"),
      responsive: [
        {
          breakpoint: 1500,
          settings: {
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
          }
        },
        {
            breakpoint: 992,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerMode: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerMode: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerMode: false,
            }
        }
      ]
    });   
  }

  if ( $( '.albums' ).length ) {
    $('.albums').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: true,
      prevArrow: $(".album-prev"),
      nextArrow: $(".album-next"),
      responsive: [
        {
          breakpoint: 1500,
          settings: {
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
          }
        },
        {
            breakpoint: 992,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerMode: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerMode: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerMode: false,
            }
        }
      ]
    });   
  }

  if ( $( '.posts' ).length ) {
    $('.posts').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: true,
      prevArrow: $(".post-prev"),
      nextArrow: $(".post-next"),
      responsive: [
        {
          breakpoint: 1500,
          settings: {
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
          }
        },
        {
            breakpoint: 992,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerMode: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerMode: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerMode: false,
            }
        }
      ]
    });   
  }


});