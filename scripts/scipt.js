window.addEventListener('load', ()=> {
    //my variables
    var headerImage = $(".image img");
    //portfolio section variables
    var swiper = document.getElementById("swiper-wrapper")
    var webApps = $("#web-apps");
    var webDesign = $("#web-design");
    var tShirtDesign = $("#t-shirt-design");

    var webAppsSwiper = $("#web-app-swiper");
    var webDesignSwiper = $("#web-design-swiper");
    var tShirtDesignSwiper = $("#t-shirt-design-swiper");
      

    //------------------------- my functions ---------------------------//

    //change the header image
    if(window.innerWidth > 772){
        headerImage.attr("src","images/header-image2.png");
    } else{
        headerImage.attr("src","images/header-image.png");
    }


    //add display property to the portfolio card data
    $(".portfolio-card").hover(function(){
      var hoverData = $('.hover-data', this);
      setTimeout(function(){
        hoverData.addClass("hover-data-display");
      }, 100);
    }, function(){
      $('.hover-data', this).removeClass("hover-data-display");
  });

  //portfolio section functions
  //for touch screens
  swiper.addEventListener('touchend', function(){
    if(webAppsSwiper.hasClass("swiper-slide-active") === true){
      if(webDesign.hasClass("portfolio-active") === true){
        webDesign.removeClass("portfolio-active");
        webApps.addClass("portfolio-active");
      }else if(tShirtDesign.hasClass("portfolio-active") === true){
        tShirtDesign.removeClass("portfolio-active");
        webApps.addClass("portfolio-active");
      }
      
    } else if(webDesignSwiper.hasClass("swiper-slide-active") === true){
      if(webApps.hasClass("portfolio-active") === true){
        webApps.removeClass("portfolio-active");
        webDesign.addClass("portfolio-active");
      }else if(tShirtDesign.hasClass("portfolio-active") === true){
        tShirtDesign.removeClass("portfolio-active");
        webDesign.addClass("portfolio-active");
      }

    }else if(tShirtDesignSwiper.hasClass("swiper-slide-active") === true){

      if(webApps.hasClass("portfolio-active") === true){
        webApps.removeClass("portfolio-active");
        tShirtDesign.addClass("portfolio-active");
      }else if( webDesign.hasClass("portfolio-active") === true){
        webDesign.removeClass("portfolio-active");
        tShirtDesign.addClass("portfolio-active");
      }
    }
  });
  //for large screens
  swiper.addEventListener('mouseup', function(){
    if(webAppsSwiper.hasClass("swiper-slide-active") === true){
      if(webDesign.hasClass("portfolio-active") === true){
        webDesign.removeClass("portfolio-active");
        webApps.addClass("portfolio-active");
      }else if(tShirtDesign.hasClass("portfolio-active") === true){
        tShirtDesign.removeClass("portfolio-active");
        webApps.addClass("portfolio-active");
      }
      
    } else if(webDesignSwiper.hasClass("swiper-slide-active") === true){
      if(webApps.hasClass("portfolio-active") === true){
        webApps.removeClass("portfolio-active");
        webDesign.addClass("portfolio-active");
      }else if(tShirtDesign.hasClass("portfolio-active") === true){
        tShirtDesign.removeClass("portfolio-active");
        webDesign.addClass("portfolio-active");
      }

    }else if(tShirtDesignSwiper.hasClass("swiper-slide-active") === true){

      if(webApps.hasClass("portfolio-active") === true){
        webApps.removeClass("portfolio-active");
        tShirtDesign.addClass("portfolio-active");
      }else if( webDesign.hasClass("portfolio-active") === true){
        webDesign.removeClass("portfolio-active");
        tShirtDesign.addClass("portfolio-active");
      }
    }
  });


    //--------------------- impeded functions --------------------------//

    var swiper = new Swiper('.first-swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        initialSlide: 1,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true,
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: false,
        },
      });

      //clients swiper
      var swiper = new Swiper('.second-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        initialSlide: 2,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

      //-----------------------------my trail functions-----------------------//
      $(':input[type="submit"]').prop('disabled', true);

})
