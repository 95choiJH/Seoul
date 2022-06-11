
var slide_news_swiper = new Swiper(".slide-news", {
    loop: true,
    allowTouchMove : false,
    autoplay: {
        delay : 1000, // 나중에 바꿔야 함
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
    

$('.tab-menu').click(function (e) {
    e.preventDefault();
    $('.tab-menu').removeClass('active');
    $('.slide-area .mainSlide').removeClass('active');
    $(this).addClass('active');
    $(this).siblings('.mainSlide').addClass('active');
});
$('.tab-menu').focus(function (e) {
    e.preventDefault();
    $('.tab-menu').removeClass('active');
    $('.slide-area .mainSlide').removeClass('active');
    $(this).addClass('active');
    $(this).siblings('.mainSlide').addClass('active');
});




// $('.link-slide').mouseover(function(){
//     slide_news_swiper.autoplay.stop();
// }); 
// $('.link-slide').mouseout(function(){
//     if ($('slide-news .button-control').hasClass('stop')) {
//         slide_news_swiper.autoplay.start();
//     } else {
//         slide_news_swiper.autoplay.stop();
//     }
// }); // mouseout 부분이 안됨.

// 처음 슬라이드는 반응하지만 다음 탭 버튼 누르고 다시 원래 탭 버튼 누를 시 슬라이드 반응 안함

$('.slide-area .slide-news .button-control').click(function(e){
    e.preventDefault();

    if ($(this).hasClass('stop')) {
        $(this).removeClass('stop');
        slide_news_swiper.autoplay.stop();
        $(this).find('span').text('재생')
    } else {
        $(this).addClass('stop');
        slide_news_swiper.autoplay.start();
        $(this).find('span').text('정지')
    }
})

var slide_part_swiper = new Swiper(".slide-part", {
    allowTouchMove : false,
    loop: true,
    autoplay: {
        delay : 1000,
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
    observer: true,
    observeParents: true,
});


// $('.slide-part').mouseover(function(){
//     slide_part_swiper.autoplay.stop();
// }); 
// $('.slide-part').mouseout(function(){
//     if ($(this).find('.stop')) {
//         slide_part_swiper.autoplay.start();
//     } else {
//         slide_part_swiper.autoplay.stop();
//     }
// }); 

$('.slide-area .slide-part .button-control').click(function(e){
    e.preventDefault();

    if ($(this).hasClass('stop')) {
        $(this).removeClass('stop');
        slide_part_swiper.autoplay.stop();
        $(this).find('span').text('정지')
    } else {
        $(this).addClass('stop');
        slide_part_swiper.autoplay.start();
        $(this).find('span').text('재생')
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
        delay : 1000, // 나중에 바꿔야 함
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