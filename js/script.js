
var slide_news_swiper = new Swiper(".slide-news", {
    loop: true,
    allowTouchMove : false,
    autoplay: {
        delay : 2500,
        speed : 500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var slide_part_swiper = new Swiper(".slide-part", {
    allowTouchMove : false,
    loop: true,
    autoplay: {
        delay : 2500,
        speed : 500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

slide_part_swiper.autoplay.stop();
$('.tab-menu').click(function (e) {
    e.preventDefault();
    $('.tab-menu.active, .mainSlide.active').removeClass('active')
    $(this).addClass('active').siblings('.mainSlide').addClass('active');
    if ($(this).parent().hasClass('menu-news')) {
        if ($(this).siblings().find('.button-control').hasClass('stop')) {
            slide_news_swiper.autoplay.stop();
        }else {
            slide_news_swiper.autoplay.start();
        }
        slide_part_swiper.autoplay.stop();
    } else {
        if ($(this).siblings().find('.button-control').hasClass('stop')) {
            slide_part_swiper.autoplay.stop();
        }else {
            slide_part_swiper.autoplay.start();
        }
        slide_news_swiper.autoplay.stop();
    }
});
$('.tab-menu').focus(function (e) {
    e.preventDefault();
    $('.tab-menu.active, .mainSlide.active').removeClass('active')
    $(this).addClass('active').siblings('.mainSlide').addClass('active');
    if ($(this).parent().hasClass('menu-news')) {
        if ($(this).siblings().find('.button-control').hasClass('stop')) {
            slide_news_swiper.autoplay.stop();
        }else {
            slide_news_swiper.autoplay.start();
        }
        slide_part_swiper.autoplay.stop();
    } else {
        if ($(this).siblings().find('.button-control').hasClass('stop')) {
            slide_part_swiper.autoplay.stop();
        }else {
            slide_part_swiper.autoplay.start();
        }
        slide_news_swiper.autoplay.stop();
    }
});




$('.mainSlide').mouseover(function(){
    slide_news_swiper.autoplay.stop();
    slide_part_swiper.autoplay.stop();
}); 
$('.mainSlide').mouseout(function(){
    if($(this).parent().hasClass('menu-news')) {
        if($(this).find('.button-control').hasClass('stop')) {
            slide_news_swiper.autoplay.stop();
        } else {
            slide_news_swiper.autoplay.start();
        }
    } else {
        if($(this).find('.button-control').hasClass('stop')) {
            slide_part_swiper.autoplay.stop();
        } else {
            slide_part_swiper.autoplay.start();
        }
    }
}); 

$('.slide-area .slide-news .button-control').click(function(e){
    e.preventDefault();

    if ($(this).hasClass('stop')) {
        $(this).removeClass('stop');
        slide_news_swiper.autoplay.start();
        $(this).find('span').text('재생')
    } else {
        $(this).addClass('stop');
        slide_news_swiper.autoplay.stop();
        $(this).find('span').text('정지')
    }
})

$('.slide-area .slide-part .button-control').click(function(e){
    e.preventDefault();

    if ($(this).hasClass('stop')) {
        $(this).removeClass('stop');
        slide_part_swiper.autoplay.start();
        $(this).find('span').text('재생')
    } else {
        $(this).addClass('stop');
        slide_part_swiper.autoplay.stop();
        $(this).find('span').text('정지')
    }
})

$('.board-area .board-list .cate-economy').text("경제").css('color', '#069363');
$('.board-area .board-list .cate-environment').text("환경").css('color', '#599100');
$('.board-area .board-list .cate-culture').text("문화").css('color', '#9b64d3');
$('.board-area .board-list .cate-taffic').text("교통").css('color', '##337ee2');
$('.board-area .board-list .cate-safty').text("안전").css('color', '#e44869');
$('.board-area .board-list .cate-house').text("주택").css('color', '##c35c3c');
$('.board-area .board-list .cate-welfare').text("복지").css('color', '#d76000');
$('.board-area .board-list .cate-work').text("행정").css('color', '##028ab6');

$('.news-area .news-item .cate-economy').text("경제").css('background', '#069363');
$('.news-area .news-item .cate-environment').text('환경').css('background', '#599100');
$('.news-area .news-item .cate-culture').text("문화").css('background', '#9b64d3');
$('.news-area .news-item .cate-taffic').text("교통").css('background', '##337ee2');
$('.news-area .news-item .cate-safty').text("안전").css('background', '#e44869');
$('.news-area .news-item .cate-house').text("주택").css('background', '##c35c3c');
$('.news-area .news-item .cate-welfare').text("복지").css('background', '#d76000');
$('.news-area .news-item .cate-work').text("행정").css('background', '#028ab6');

var bannerSlide_swiper = new Swiper(".bannerSlide", {
    allowTouchMove : false,
    slidesPerView: 3,
    spaceBetween: 43,
    loop: true,
    autoplay: {
        delay : 2500, 
        speed : 600,
        disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $('.banner-slide-area .pagination .button-control').click(function(e){
      e.preventDefault();

      if ($(this).hasClass('stop')) {
          $(this).removeClass('stop');
          bannerSlide_swiper.autoplay.start();
          $(this).find('span').text('정지')
      } else {
          $(this).addClass('stop');
          bannerSlide_swiper.autoplay.stop();
          $(this).find('span').text('재생')
      }
  })

  $('.bottom-menu-area .menu-list').click(function(e){
      e.preventDefault();
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).find('.submenu-wrap').stop().slideUp();
      } else {   
        $('.submenu-wrap').stop().slideUp();
        $('.bottom-menu-area .menu-list').removeClass('active');
        $(this).addClass('active');
        $(this).find('.submenu-wrap').stop().slideDown();
      }
  })
  $('.bottom-menu-area .submenu-list:first-child .link-submenu').keydown(function(e){
    var keyCode = e.keycode || e.which;

    if (keyCode == 9 && e.shiftKey) {
        $('.submenu-wrap').stop().slideUp();
    }
  })
  $('.bottom-menu-area .submenu-list:last-child .link-submenu').keydown(function(e){
    var keyCode = e.keycode || e.which;

    if (keyCode == 9 && !e.shiftKey) {
        $('.submenu-wrap').stop().slideUp();
    }
  })
  $(window).scroll(function(){
    if ($(window).scrollTop() >= 50) {
        $('.btn-top').removeClass('hide');
    } else {
        $('.btn-top').addClass('hide');
    }
  })
  $(window).trigger('scroll');
  $('.btn-top').click(function(e){
      e.preventDefault();
      $('html, body').animate({
          scrollTop: 0
      }, 300);
      $('.submenu-wrap').stop().slideUp();
      $('.bottom-menu-area .menu-list').removeClass('active');
  })